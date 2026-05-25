/**
 * Vitruvius - State Management & Gamification Engine
 * Handles user progression, hearts recovery, streaks, leagues, and persistent storage.
 */

class VitruviusState {
  constructor() {
    this.storageKey = "vitruvius_app_state";
    this.heartRegenTimeMs = 4 * 60 * 60 * 1000; // 4 hours
    this.maxHearts = 5;
    this.state = this.loadLocalState(); // Fallback
    
    // Firebase references
    this.fb = null;
    this.uid = null;
    this.isOnline = false;

    this.syncHearts();
    this.checkStreakExpiration();
  }

  // Asynchronous init for Firebase
  async initFirebase(onAuthStateChangeCallback) {
    try {
      this.fb = await import('./firebase-config.js');
      
      this.fb.onAuthStateChanged(this.fb.auth, async (user) => {
        if (user) {
          this.uid = user.uid;
          this.state.displayName = user.displayName || "AI Explorer";
          this.isOnline = true;
          
          // Try to load from Firebase
          await this.loadFromFirebase();
        } else {
          this.uid = null;
          this.isOnline = false;
        }
        if (onAuthStateChangeCallback) onAuthStateChangeCallback(user);
      });
    } catch (e) {
      console.error("Failed to load Firebase", e);
    }
  }

  async loginWithGoogle() {
    if (!this.fb) return;
    try {
      await this.fb.signInWithPopup(this.fb.auth, this.fb.googleProvider);
    } catch (e) {
      console.error("Login failed", e);
    }
  }

  async logout() {
    if (!this.fb) return;
    await this.fb.signOut(this.fb.auth);
    this.resetState();
  }

  // Load local state as fallback
  loadLocalState() {
    const cached = localStorage.getItem(this.storageKey);
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        if (!parsed.botCompetitors || parsed.botCompetitors.length === 0) {
          parsed.botCompetitors = this.generateBotCompetitors();
        }
        return parsed;
      } catch (e) {
        console.error("Error parsing cached state, resetting.", e);
      }
    }
    return this.getInitialState();
  }

  async loadFromFirebase() {
    if (!this.isOnline || !this.uid) return;
    const userRef = this.fb.ref(this.fb.database, `users/${this.uid}`);
    try {
      const snapshot = await this.fb.get(userRef);
      if (snapshot.exists()) {
        const cloudState = snapshot.val();
        // Merge cloud state with local state (keep cloud as source of truth)
        this.state = { ...this.getInitialState(), ...cloudState };
      } else {
        // First time in cloud, upload local state
        await this.saveToFirebase();
      }
      this.syncHearts();
      this.saveLocal(); // sync local cache
    } catch (e) {
      console.error("Error loading from Firebase", e);
    }
  }

  getInitialState() {
    return {
      displayName: "AI Explorer",
      xp: 0,
      level: 1,
      hearts: 5,
      lastHeartsSync: Date.now(),
      streak: 0,
      lastActiveDate: null, // "YYYY-MM-DD"
      preferredLanguage: "es", // Bilingual defaults to Spanish as per user prompt, toggles to English.
      completedLessons: [],
      unlockedBadges: [],
      leagueTier: "Bronce", // Bronce, Plata, Oro, Obsidiana, Vitruviana
      weeklyXP: 0,
      hasStreakFreeze: false,
      botCompetitors: this.generateBotCompetitors()
    };
  }

  saveLocal() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.state));
  }

  async saveToFirebase() {
    if (!this.isOnline || !this.uid) return;
    const userRef = this.fb.ref(this.fb.database, `users/${this.uid}`);
    try {
      await this.fb.set(userRef, this.state);
    } catch (e) {
      console.error("Error saving to Firebase", e);
    }
  }

  save() {
    this.saveLocal();
    this.saveToFirebase(); // async call, we don't block
  }

  resetState() {
    this.state = this.getInitialState();
    this.save();
  }

  // Level Progression Math
  getRequiredXpForLevel(level) {
    return Math.round(100 * Math.pow(level, 1.5));
  }

  addXP(gainedXP) {
    // Apply streak multiplier
    const multiplier = 1.0 + Math.min(0.25, this.state.streak * 0.01);
    const finalGained = Math.round(gainedXP * multiplier);

    this.state.xp += finalGained;
    this.state.weeklyXP += finalGained;

    // Simulate competitor advancement slightly on every action to make leaderboard feel alive
    this.advanceCompetitors();

    let leveledUp = false;
    while (true) {
      const required = this.getRequiredXpForLevel(this.state.level);
      if (this.state.xp >= required) {
        this.state.xp -= required;
        this.state.level++;
        this.state.hearts = this.maxHearts; // Refill hearts on level up!
        this.state.lastHeartsSync = Date.now();
        leveledUp = true;
        this.triggerBadgeUnlock("studio_architect"); // Mock dynamic check
      } else {
        break;
      }
    }

    this.save();
    return {
      gained: finalGained,
      leveledUp: leveledUp,
      newLevel: this.state.level
    };
  }

  // Hearts Regeneration Math
  syncHearts() {
    if (this.state.hearts >= this.maxHearts) {
      this.state.lastHeartsSync = Date.now();
      this.save();
      return;
    }

    const now = Date.now();
    const timeDelta = now - this.state.lastHeartsSync;
    const recovered = Math.floor(timeDelta / this.heartRegenTimeMs);

    if (recovered > 0) {
      this.state.hearts = Math.min(this.maxHearts, this.state.hearts + recovered);
      // Advance sync timestamp by recovered intervals
      this.state.lastHeartsSync += recovered * this.heartRegenTimeMs;
      this.save();
    }
  }

  deductHeart() {
    this.syncHearts();
    if (this.state.hearts > 0) {
      if (this.state.hearts === this.maxHearts) {
        // Set sync baseline at the moment energy drops from maximum
        this.state.lastHeartsSync = Date.now();
      }
      this.state.hearts--;
      this.save();
    }
    return this.state.hearts;
  }

  refillHeartsWithXP() {
    const cost = 150;
    // We let user buy hearts or do it with mock XP subtraction
    if (this.state.xp >= cost || this.state.level > 1 || this.state.weeklyXP > cost) {
      this.state.hearts = this.maxHearts;
      this.state.lastHeartsSync = Date.now();
      // Deduct XP safely
      if (this.state.xp >= cost) {
        this.state.xp -= cost;
      } else {
        this.state.weeklyXP = Math.max(0, this.state.weeklyXP - cost);
      }
      this.save();
      return true;
    }
    return false;
  }

  getHeartTimerDetails() {
    this.syncHearts();
    if (this.state.hearts >= this.maxHearts) {
      return { remainingSeconds: 0, text: "--:--" };
    }
    const now = Date.now();
    const nextRegen = this.state.lastHeartsSync + this.heartRegenTimeMs;
    const remainingMs = Math.max(0, nextRegen - now);
    const seconds = Math.floor(remainingMs / 1000);
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    const timeString = `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
    return {
      remainingSeconds: seconds,
      text: timeString
    };
  }

  // Daily Streak Engine
  checkStreakExpiration() {
    if (!this.state.lastActiveDate) return;
    const todayStr = this.getLocalDateString();
    const yesterdayStr = this.getLocalDateString(-1);

    if (this.state.lastActiveDate !== todayStr && this.state.lastActiveDate !== yesterdayStr) {
      // Streak broken!
      if (this.state.hasStreakFreeze) {
        this.state.hasStreakFreeze = false;
        this.state.lastActiveDate = yesterdayStr; // Save from break once
      } else {
        this.state.streak = 0;
      }
      this.save();
    }
  }

  registerActiveDay() {
    const todayStr = this.getLocalDateString();
    const yesterdayStr = this.getLocalDateString(-1);

    if (!this.state.lastActiveDate) {
      this.state.streak = 1;
    } else if (this.state.lastActiveDate === yesterdayStr) {
      this.state.streak++;
    } else if (this.state.lastActiveDate !== todayStr) {
      this.state.streak = 1; // reset streak if broken gap longer
    }

    this.state.lastActiveDate = todayStr;
    this.triggerBadgeUnlock("deep_mind");
    this.save();
  }

  getLocalDateString(offsetDays = 0) {
    const date = new Date();
    if (offsetDays !== 0) {
      date.setDate(date.getDate() + offsetDays);
    }
    const y = date.getFullYear();
    const m = (date.getMonth() + 1).toString().padStart(2, "0");
    const d = date.getDate().toString().padStart(2, "0");
    return `${y}-${m}-${d}`;
  }

  // Modules & Progress Tracking
  completeLesson(lessonId, gainedXP) {
    if (!this.state.completedLessons.includes(lessonId)) {
      this.state.completedLessons.push(lessonId);
    }
    this.registerActiveDay();
    const rewards = this.addXP(gainedXP);

    // Auto-badge checks
    if (this.state.completedLessons.length >= 3) {
      this.triggerBadgeUnlock("source_finder");
    }
    if (this.state.completedLessons.length >= 8) {
      this.triggerBadgeUnlock("prompt_master");
    }

    this.save();
    return rewards;
  }

  triggerBadgeUnlock(badgeId) {
    if (!this.state.unlockedBadges.includes(badgeId)) {
      this.state.unlockedBadges.push(badgeId);
      this.save();
      return true;
    }
    return false;
  }

  // League Competitors Engine (Weekly Leaderboard Simulation)
  generateBotCompetitors() {
    const botNames = [
      "NeuralFrog 🐸", "StudioSage 🧪", "PromptWizard 🧙‍♂️", "GeminiMaster ✨", 
      "TensorBeast 🦖", "ContextKnight 🛡️", "TokenCollector 💎", "BpeMaster ✂️",
      "ModelTuner 🎛️", "RagArchitect 🏗️", "StudioNovice 🎒", "VertexValkyrie ⚡",
      "AiInnovator 🚀", "LLMCracker 🔓", "CyberCroak 🦾", "SiliconToad 🐸",
      "VectorExplorer 🧭", "HyperParam 📊", "DeepLeap 🦘", "WiseVitrü 🧠",
      "PromptSniper 🎯", "FewShotMaster 🎯", "MultiModalPro 🖼️", "AgentCore ⚙️",
      "SystemDirect 📜", "ZeroHallucinate 🛡️", "EmbedFrog 🐸", "AttentionMap 🗺️",
      "ByteEncoder 💾"
    ];

    return botNames.map((name, index) => {
      // Allocate random starting weekly XP
      const baseXP = Math.floor(Math.random() * 250) + (29 - index) * 10;
      return {
        name: name,
        weeklyXP: baseXP,
        avatarColor: `hsl(${(index * 360 / 29).toFixed(0)}, 70%, 60%)`
      };
    });
  }

  advanceCompetitors() {
    // Increase random competitor XP to simulate active leaderboard racing
    this.state.botCompetitors.forEach(bot => {
      if (Math.random() > 0.4) {
        bot.weeklyXP += Math.floor(Math.random() * 25) + 5;
      }
    });
    this.save();
  }

  async fetchGlobalLeaderboard() {
    if (!this.isOnline || !this.fb) return this.getLeaderboard(); // local bots fallback

    try {
      const usersRef = this.fb.query(this.fb.ref(this.fb.database, 'users'), this.fb.orderByChild('weeklyXP'), this.fb.limitToLast(50));
      const snapshot = await this.fb.get(usersRef);
      
      if (snapshot.exists()) {
        const board = [];
        snapshot.forEach((childNode) => {
          const val = childNode.val();
          board.push({
            name: childNode.key === this.uid ? `${val.displayName} (Tú)` : val.displayName,
            weeklyXP: val.weeklyXP || 0,
            avatarColor: childNode.key === this.uid ? "#00f0ff" : `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`,
            isUser: childNode.key === this.uid
          });
        });
        
        // Ensure user is in the list even if not in top 50 (for a real app we'd query specifically, but this is okay for now)
        const userInBoard = board.find(p => p.isUser);
        if (!userInBoard) {
          board.push({
            name: `${this.state.displayName} (Tú)`,
            weeklyXP: this.state.weeklyXP,
            avatarColor: "#00f0ff",
            isUser: true
          });
        }
        
        board.sort((a, b) => b.weeklyXP - a.weeklyXP);
        return board;
      }
    } catch (e) {
      console.error("Failed to fetch global leaderboard", e);
    }
    
    return this.getLeaderboard(); // fallback
  }

  getLeaderboard() {
    // Local bot leaderboard fallback
    const userRow = {
      name: `${this.state.displayName} (Tú)`,
      weeklyXP: this.state.weeklyXP,
      avatarColor: "#00f0ff",
      isUser: true
    };

    const board = [...this.state.botCompetitors, userRow];
    board.sort((a, b) => b.weeklyXP - a.weeklyXP);
    return board;
  }
}

// Bind to window instance for easy cross-file module usage
window.vitruviusState = new VitruviusState();
