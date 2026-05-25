/**
 * Vitruvius - Core Application Controller, Audio Synthesizer, & Router
 * Manages view states, interactive lesson cards, Web Audio sounds,
 * SVG paths, and the dynamic Google AI Studio sandbox integrations.
 */

// Global Audio Context (Lazy initialized on first user click to satisfy browser policy)
let audioCtx = null;
let soundMuted = false;

// Dictionary mapping for static bilingual translations
const I18N_DICTIONARY = {
  es: {
    startText: "INICIAR PORTAL",
    splashSubtitle: "Micro-aprendizaje de Inteligencia Artificial Generativa",
    pathWelcome: "Tu Ruta de Habilidades",
    pathSub: "Aprende haciendo. Completa los nodos para avanzar.",
    pgTitle: "Laboratorio AI Studio",
    pgSub: "Ajusta parámetros reales y prueba tu ingeniería de prompts.",
    lblTargetModel: "Modelo Core:",
    lblTemp: "Temperatura:",
    lblTempMin: "Determinista",
    lblTempMax: "Creativo",
    lblSystemInstructions: "Instrucciones del Sistema:",
    lblPromptWorkbench: "Workbench de Prompt:",
    btnRunPromptText: "EJECUTAR PROMPT",
    keyHint: "Tus credenciales se guardan localmente en tu navegador y se llaman directamente a Google APIs.",
    leagueTitle: "Liga de Obsidiana",
    leagueSub: "El top 5 asciende. El bottom 5 desciende de rango.",
    lblTimeRemaining: "Fin de Temporada:",
    colRank: "Rango",
    colUser: "Usuario",
    colXp: "XP Semanal",
    profileLevelLabel: "Nivel",
    xpProgressTitle: "Progreso de Nivel",
    titleAchievements: "Logros Desbloqueados",
    descPromptMaster: "Resuelve 8 lecciones.",
    descStudioArchitect: "Sube a Nivel 5.",
    descSourceFinder: "Resuelve 3 lecciones.",
    descDeepMind: "Mantén racha activa.",
    btnResetText: "REINICIAR DATOS",
    navPath: "Camino",
    navLab: "Laboratorio",
    navLeague: "Liga",
    navProfile: "Perfil",
    outroTitle: "¡LECCIÓN COMPLETADA!",
    outroSub: "Vitrü está muy orgulloso de tu avance cognitivo.",
    outroXpTitle: "XP GANADA",
    outroStreakTitle: "RACHA ACTIVA",
    btnOutroText: "CONTINUAR AL CAMINO",
    lblLevelUp: "¡SUBIDA DE NIVEL!",
    checkBtn: "COMPROBAR",
    nextBtn: "CONTINUAR",
    excellentTxt: "¡Excelente trabajo!",
    incorrectTxt: "Respuesta Incorrecta",
    noHeartsTitle: "¡Te quedaste sin vidas!",
    noHeartsBody: "Regenera 1 vida en unas horas, o recarga instantáneamente 5 vidas gastando 150 XP.",
    btnRefillHearts: "RECARGAR (+150 XP)",
    btnRefillCancel: "ESPERAR REGEN",
    promptEvalCorrect: "¡Excelente prompt! Cumple con la estructura de ingeniería.",
    promptEvalIncorrect: "Tu prompt podría mejorarse. Intenta usar delimitadores o ser más específico."
  },
  en: {
    startText: "LAUNCH PORTAL",
    splashSubtitle: "Gamified Micro-Learning for Generative AI Engineering",
    pathWelcome: "Your Skill Tree",
    pathSub: "Learn by doing. Complete nodes to advance.",
    pgTitle: "AI Studio Lab",
    pgSub: "Tuning real-time parameters and prompt engineering workbench.",
    lblTargetModel: "Core Model:",
    lblTemp: "Temperature:",
    lblTempMin: "Deterministic",
    lblTempMax: "Creative",
    lblSystemInstructions: "System Instructions:",
    lblPromptWorkbench: "Prompt Workbench:",
    btnRunPromptText: "EXECUTE PROMPT",
    keyHint: "Credentials are cached securely in your browser and call Google APIs directly.",
    leagueTitle: "Obsidian League",
    leagueSub: "Top 5 are promoted. Bottom 5 are demoted.",
    lblTimeRemaining: "Season Ends in:",
    colRank: "Rank",
    colUser: "User",
    colXp: "Weekly XP",
    profileLevelLabel: "Level",
    xpProgressTitle: "Level Progress",
    titleAchievements: "Unlocked Badges",
    descPromptMaster: "Solve 8 lessons.",
    descStudioArchitect: "Reach Level 5.",
    descSourceFinder: "Solve 3 lessons.",
    descDeepMind: "Keep active streak.",
    btnResetText: "RESET ALL PROGRESS",
    navPath: "Path",
    navLab: "Lab",
    navLeague: "League",
    navProfile: "Profile",
    outroTitle: "LESSON COMPLETED!",
    outroSub: "Vitrü is highly proud of your cognitive leap.",
    outroXpTitle: "XP EARNED",
    outroStreakTitle: "ACTIVE STREAK",
    btnOutroText: "BACK TO THE PATH",
    lblLevelUp: "LEVEL UP!",
    checkBtn: "CHECK ANSWER",
    nextBtn: "CONTINUE",
    excellentTxt: "Excellent work!",
    incorrectTxt: "Incorrect Answer",
    noHeartsTitle: "Out of Hearts!",
    noHeartsBody: "Hearts recharge every 4 hours, or buy a full set of 5 hearts instantly for 150 XP.",
    btnRefillHearts: "REFILL (+150 XP)",
    btnRefillCancel: "WAIT REGEN",
    promptEvalCorrect: "Excellent prompt! Follows prompt engineering rules.",
    promptEvalIncorrect: "Your prompt can be optimized. Try using delimiters or instructions."
  }
};

// State variables for Active Lesson Engine
let activeLesson = null;
let activeCardIndex = 0;
let selectedCardIndex = null;
let activeCodeFillValue = null;
let activeLessonHearts = 5;

// ==================== APP INITIALIZATION & LOCALIZATION ====================
document.addEventListener("DOMContentLoaded", () => {
  setupEventListeners();
  applyLanguage(window.vitruviusState.state.preferredLanguage);
  updateHUD();
  drawWindingTreePath();
  
  // Set up passive hearts timer loop
  setInterval(() => {
    updateHeartsTimer();
  }, 1000);
});

function setupEventListeners() {
  // Splash Screen Trigger
  document.getElementById("btn-start").addEventListener("click", () => {
    playSynthesizerSound("start");
    transitionScreen("screen-splash", "screen-dashboard");
    switchTab("path");
  });
}

function applyLanguage(lang) {
  const dictionary = I18N_DICTIONARY[lang];
  Object.keys(dictionary).forEach(key => {
    const el = document.getElementById(key);
    if (el) {
      el.textContent = dictionary[key];
    }
  });

  // Handle placeholders
  document.getElementById("pg-system").placeholder = lang === "es" ? 
    "Eres una rana cibernética que resume textos..." : "You are a cyber-frog summarizing inputs...";
  document.getElementById("pg-prompt").placeholder = lang === "es" ? 
    "Añade tu prompt de instrucción aquí..." : "Enter your custom instruction prompt here...";

  // Toggle buttons visual state
  document.getElementById("btn-lang-en").classList.toggle("active", lang === "en");
  document.getElementById("btn-lang-es").classList.toggle("active", lang === "es");
  document.getElementById("lang-label").textContent = lang.toUpperCase();

  // Re-draw Path & Leagues in localized text
  renderSkillTree();
  renderLeaderboard();
  renderProfile();
}

function setLanguage(lang) {
  window.vitruviusState.state.preferredLanguage = lang;
  window.vitruviusState.save();
  applyLanguage(lang);
  playSynthesizerSound("click");
}

function toggleLanguage() {
  const nextLang = window.vitruviusState.state.preferredLanguage === "es" ? "en" : "es";
  setLanguage(nextLang);
}

// ==================== NAVIGATION AND ROUTER ====================
function transitionScreen(fromId, toId) {
  document.getElementById(fromId).classList.remove("active");
  const toScreen = document.getElementById(toId);
  toScreen.classList.add("active");
  
  if (toId === "screen-dashboard") {
    // Redraw SVG path coordinates after layout shifts
    setTimeout(drawWindingTreePath, 100);
  }
}

function switchTab(tabId) {
  playSynthesizerSound("click");
  
  // Update footer button classes
  document.querySelectorAll(".nav-tab-btn").forEach(btn => {
    btn.classList.remove("active");
  });
  document.getElementById(`tab-btn-${tabId}`).classList.add("active");

  // Toggle views
  document.querySelectorAll(".tab-view").forEach(view => {
    view.classList.remove("active");
  });
  document.getElementById(`view-${tabId}`).classList.add("active");

  if (tabId === "path") {
    renderSkillTree();
    setTimeout(drawWindingTreePath, 50);
  } else if (tabId === "leagues") {
    renderLeaderboard();
  } else if (tabId === "profile") {
    renderProfile();
  }
}

// ==================== HUD UPDATE SERVICE ====================
function updateHUD() {
  const state = window.vitruviusState.state;
  document.getElementById("hud-xp").textContent = `${state.xp} XP`;
  document.getElementById("hud-streak").textContent = state.streak;
  document.getElementById("hud-hearts").textContent = state.hearts;
  
  updateHeartsTimer();
}

function updateHeartsTimer() {
  const state = window.vitruviusState.state;
  const regen = window.vitruviusState.getHeartTimerDetails();
  const timerLabel = document.getElementById("hud-regen-timer");

  document.getElementById("hud-hearts").textContent = state.hearts;

  if (state.hearts >= 5) {
    timerLabel.textContent = "--:--";
  } else {
    timerLabel.textContent = regen.text;
  }
}

function promptRefillHearts() {
  const lang = window.vitruviusState.state.preferredLanguage;
  const dict = I18N_DICTIONARY[lang];
  
  if (window.vitruviusState.state.hearts >= 5) {
    return;
  }

  // Create absolute premium overlay modal prompt for heart refills
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay-refill active";
  overlay.innerHTML = `
    <div class="glass-card modal-refill-card">
      <h3>${dict.noHeartsTitle}</h3>
      <p>${dict.noHeartsBody}</p>
      <button class="btn-primary glow-emerald btn-full" id="btn-modal-refill">${dict.btnRefillHearts}</button>
      <button class="btn-secondary btn-full" id="btn-modal-cancel">${dict.btnRefillCancel}</button>
    </div>
  `;
  document.body.appendChild(overlay);

  // Sound Synthesizer click
  playSynthesizerSound("error");

  document.getElementById("btn-modal-refill").onclick = () => {
    const success = window.vitruviusState.refillHeartsWithXP();
    if (success) {
      playSynthesizerSound("levelUp");
      updateHUD();
    } else {
      playSynthesizerSound("error");
    }
    overlay.remove();
  };

  document.getElementById("btn-modal-cancel").onclick = () => {
    playSynthesizerSound("click");
    overlay.remove();
  };
}

// ==================== DYNAMIC SKILL TREE RENDERER ====================
function renderSkillTree() {
  const lang = window.vitruviusState.state.preferredLanguage;
  const curriculum = window.VITRUVIUS_CURRICULUM;
  const completedLessons = window.vitruviusState.state.completedLessons;
  const container = document.getElementById("nodesList");
  container.innerHTML = "";

  let previousCompleted = true; // First node is always unlocked

  curriculum.forEach((module, mIndex) => {
    // Inject Module Section Header
    const divider = document.createElement("div");
    divider.className = "path-module-divider";
    divider.innerHTML = `
      <h4>${lang === "es" ? module.title_es : module.title_en}</h4>
      <p>${lang === "es" ? module.description_es : module.description_en}</p>
    `;
    container.appendChild(divider);

    module.lessons.forEach((lesson, lIndex) => {
      const isCompleted = completedLessons.includes(lesson.id);
      const isUnlocked = previousCompleted; // Unlocked if previous is completed

      const nodeWrapper = document.createElement("div");
      nodeWrapper.className = `skill-node-wrapper ${isCompleted ? "completed" : isUnlocked ? "unlocked" : "locked"}`;
      nodeWrapper.id = `node-${lesson.id}`;

      // Left-Right offset to make winding visual path S-shaped
      let offset = "0px";
      if (lIndex % 2 === 1) offset = "-55px";
      if (lIndex % 2 === 0 && lIndex > 0) offset = "55px";
      nodeWrapper.style.transform = `translateX(${offset})`;

      let extraIcon = "";
      if (isCompleted) extraIcon = `<div class="node-crown"><i class="fa-solid fa-crown"></i></div>`;
      else if (!isUnlocked) extraIcon = `<div class="node-lock"><i class="fa-solid fa-lock"></i></div>`;

      nodeWrapper.innerHTML = `
        <div class="skill-node-glow-halo"></div>
        ${extraIcon}
        <button class="skill-node-btn" onclick="launchLesson('${lesson.id}', ${isUnlocked})">
          ${module.icon}
        </button>
        <span class="skill-node-label">${lang === "es" ? lesson.title_es : lesson.title_en}</span>
      `;

      container.appendChild(nodeWrapper);
      
      // The current completion state dictates if the next is unlocked
      previousCompleted = isCompleted;
    });
  });
}

// Draws curved lines connecting node buttons dynamically
function drawWindingTreePath() {
  const container = document.getElementById("skillTreeContainer");
  const svg = document.getElementById("pathSvgLine");
  const nodes = document.querySelectorAll(".skill-node-btn");
  
  if (!svg || nodes.length < 2) return;

  svg.innerHTML = "";
  const rects = [];
  const treeRect = container.getBoundingClientRect();

  nodes.forEach(node => {
    const r = node.getBoundingClientRect();
    rects.push({
      x: r.left - treeRect.left + r.width / 2,
      y: r.top - treeRect.top + r.height / 2
    });
  });

  let d = `M ${rects[0].x} ${rects[0].y}`;
  for (let i = 1; i < rects.length; i++) {
    const prev = rects[i - 1];
    const curr = rects[i];
    // Create soft cubic bezier curve coordinates for snake map
    const midY = (prev.y + curr.y) / 2;
    d += ` C ${prev.x} ${midY}, ${curr.x} ${midY}, ${curr.x} ${curr.y}`;
  }

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", d);
  path.setAttribute("fill", "none");
  path.setAttribute("stroke", "rgba(0, 240, 255, 0.15)");
  path.setAttribute("stroke-width", "6");
  path.setAttribute("stroke-dasharray", "8, 6");
  
  svg.appendChild(path);
}

// ==================== LESSON RUNNER SYSTEM ====================
function launchLesson(lessonId, isUnlocked) {
  if (!isUnlocked) {
    playSynthesizerSound("error");
    return;
  }

  // Double check hearts budget
  if (window.vitruviusState.state.hearts <= 0) {
    promptRefillHearts();
    return;
  }

  playSynthesizerSound("start");

  // Load lesson dataset
  const curriculum = window.VITRUVIUS_CURRICULUM;
  let targetLesson = null;
  curriculum.forEach(m => {
    const l = m.lessons.find(x => x.id === lessonId);
    if (l) targetLesson = l;
  });

  if (!targetLesson) return;

  activeLesson = targetLesson;
  activeCardIndex = 0;
  activeLessonHearts = window.vitruviusState.state.hearts;

  transitionScreen("screen-dashboard", "screen-lesson");
  renderActiveLessonCard();
}

function renderActiveLessonCard() {
  const lang = window.vitruviusState.state.preferredLanguage;
  const card = activeLesson.cards[activeCardIndex];
  const container = document.getElementById("activeLessonCard");
  const progressPercent = (activeCardIndex / activeLesson.cards.length) * 100;
  
  // Set progress bars
  document.getElementById("lessonProgressBarFill").style.width = `${progressPercent}%`;
  document.getElementById("lesson-hearts").textContent = activeLessonHearts;

  // Clear confirmation footer drawers
  document.getElementById("evaluationFeedbackPanel").style.display = "none";
  const actionBtn = document.getElementById("btn-lesson-action");
  actionBtn.className = "btn-primary btn-full glow-cyan";
  document.getElementById("lessonActionText").textContent = lang === "es" ? "COMPROBAR" : "CHECK ANSWER";

  selectedCardIndex = null;
  activeCodeFillValue = null;

  container.innerHTML = "";

  const questionTitle = document.createElement("h3");
  questionTitle.className = "lesson-card-question";
  questionTitle.textContent = lang === "es" ? card.question_es : card.question_en;
  container.appendChild(questionTitle);

  // Render sub-screens based on lesson card formats
  if (card.type === "mcq") {
    const grid = document.createElement("div");
    grid.className = "mcq-choices-grid";
    
    const options = lang === "es" ? card.options_es : card.options_en;
    options.forEach((opt, idx) => {
      const tile = document.createElement("button");
      tile.className = "choice-tile-btn";
      tile.id = `choice-${idx}`;
      tile.textContent = opt;
      tile.onclick = () => selectMCQChoice(idx);
      grid.appendChild(tile);
    });
    container.appendChild(grid);

  } else if (card.type === "code") {
    // Dynamic terminals
    const editor = document.createElement("div");
    editor.className = "code-box-editor";
    
    const codeSplit = card.code.split("[____]");
    editor.innerHTML = `${codeSplit[0]}<span class="code-blank-placeholder" id="code-blank-slot">????</span>${codeSplit[1]}`;
    container.appendChild(editor);

    // Dynamic drag code choices row
    const row = document.createElement("div");
    row.className = "code-options-row";
    card.options.forEach(opt => {
      const tile = document.createElement("button");
      tile.className = "code-tile-option";
      tile.textContent = opt;
      tile.onclick = () => selectCodeTile(opt, tile);
      row.appendChild(tile);
    });
    container.appendChild(row);

  } else if (card.type === "slider") {
    // Target parameters sandbox card
    const sandbox = document.createElement("div");
    sandbox.className = "glass-card config-card";
    
    sandbox.innerHTML = `
      <div class="card-section">
        <div class="slider-header">
          <span style="color: var(--neon-magenta);"><i class="fa-solid fa-temperature-half"></i> Temperature:</span>
          <span class="slider-val" id="card-slider-val" style="color: var(--neon-emerald);">1.0</span>
        </div>
        <input type="range" class="custom-slider" id="card-slider-range" min="0.0" max="2.0" step="0.2" value="1.0" oninput="updateSliderVal('card-slider-range', 'card-slider-val'); verifySliderAnswer()">
        <div class="slider-labels">
          <span>${card.options_en.min_label}</span>
          <span>${card.options_en.max_label}</span>
        </div>
      </div>
    `;
    container.appendChild(sandbox);
    
    selectedCardIndex = 1.0; // Starting range value
  }
}

// Exercise Choice Selections
function selectMCQChoice(idx) {
  playSynthesizerSound("click");
  selectedCardIndex = idx;
  document.querySelectorAll(".choice-tile-btn").forEach(btn => {
    btn.classList.remove("selected");
  });
  document.getElementById(`choice-${idx}`).classList.add("selected");
}

function selectCodeTile(val, tileBtn) {
  playSynthesizerSound("click");
  activeCodeFillValue = val;
  const blank = document.getElementById("code-blank-slot");
  blank.textContent = val;
  blank.classList.add("filled");
  
  document.querySelectorAll(".code-tile-option").forEach(btn => {
    btn.style.opacity = "1";
    btn.style.borderColor = "rgba(255,255,255,0.08)";
  });
  tileBtn.style.opacity = "0.5";
  tileBtn.style.borderColor = "var(--neon-cyan)";
}

function verifySliderAnswer() {
  const val = parseFloat(document.getElementById("card-slider-range").value);
  selectedCardIndex = val;
}

// Action button clicking (Evaluate Answer vs Next Step)
function handleLessonAction() {
  const lang = window.vitruviusState.state.preferredLanguage;
  const card = activeLesson.cards[activeCardIndex];
  const dict = I18N_DICTIONARY[lang];
  const actionBtnText = document.getElementById("lessonActionText").textContent;

  if (actionBtnText === dict.nextBtn) {
    // Advance cards
    activeCardIndex++;
    if (activeCardIndex >= activeLesson.cards.length) {
      finishLessonWithOutro();
    } else {
      renderActiveLessonCard();
    }
    return;
  }

  // Otherwise, we evaluate!
  let correct = false;

  if (card.type === "mcq") {
    if (selectedCardIndex === null) {
      playSynthesizerSound("error");
      return;
    }
    correct = (selectedCardIndex === card.answer);
    
    // UI Visual highlighting states
    document.querySelectorAll(".choice-tile-btn").forEach((btn, idx) => {
      btn.onclick = null; // Disable clicks
      if (idx === card.answer) {
        btn.classList.add("correct-eval");
      } else if (idx === selectedCardIndex) {
        btn.classList.add("incorrect-eval");
      }
    });

  } else if (card.type === "code") {
    if (!activeCodeFillValue) {
      playSynthesizerSound("error");
      return;
    }
    correct = (activeCodeFillValue === card.answer);
    document.querySelectorAll(".code-tile-option").forEach(btn => btn.onclick = null);

  } else if (card.type === "slider") {
    correct = (selectedCardIndex === card.target);
  }

  // Draw confirming bottom drawers
  const feedbackPanel = document.getElementById("evaluationFeedbackPanel");
  const feedbackTitle = document.getElementById("evalFeedbackTitle");
  const feedbackText = document.getElementById("evalFeedbackText");

  feedbackPanel.style.display = "flex";
  
  if (correct) {
    playSynthesizerSound("correct");
    feedbackPanel.className = "footer-evaluation-feedback correct";
    feedbackTitle.textContent = dict.excellentTxt;
    feedbackText.textContent = lang === "es" ? card.explanation_es : card.explanation_en;
  } else {
    playSynthesizerSound("error");
    feedbackPanel.className = "footer-evaluation-feedback incorrect";
    feedbackTitle.textContent = dict.incorrectTxt;
    feedbackText.textContent = lang === "es" ? card.explanation_es : card.explanation_en;

    // Deduct Hearts
    activeLessonHearts--;
    document.getElementById("lesson-hearts").textContent = activeLessonHearts;
    window.vitruviusState.deductHeart();
    updateHUD();

    if (activeLessonHearts <= 0) {
      setTimeout(() => {
        exitActiveLesson();
        promptRefillHearts();
      }, 1500);
      return;
    }
  }

  const actionBtn = document.getElementById("btn-lesson-action");
  actionBtn.className = correct ? "btn-primary btn-full glow-emerald" : "btn-primary btn-full glow-magenta";
  document.getElementById("lessonActionText").textContent = dict.nextBtn;
}

function exitActiveLesson() {
  playSynthesizerSound("error");
  transitionScreen("screen-lesson", "screen-dashboard");
  switchTab("path");
}

function finishLessonWithOutro() {
  playSynthesizerSound("levelUp");
  
  const lang = window.vitruviusState.state.preferredLanguage;
  const state = window.vitruviusState.state;
  
  // Commit state and calculate awards
  const rewards = window.vitruviusState.completeLesson(activeLesson.id, activeLesson.xp);
  updateHUD();

  transitionScreen("screen-lesson", "screen-outro");

  // Populating awards
  document.getElementById("outroXpVal").textContent = `+${rewards.gained} XP`;
  document.getElementById("outroStreakVal").textContent = `${state.streak} ${lang === "es" ? "Días" : "Days"}`;

  const drawer = document.getElementById("outroLevelUpDrawer");
  if (rewards.leveledUp) {
    drawer.style.display = "block";
    document.getElementById("outroLevelUpMsg").textContent = lang === "es" ? 
      `Has alcanzado el Nivel ${rewards.newLevel}. Tus corazones se han recargado al 100%.` :
      `You reached Level ${rewards.newLevel}. Hearts fully refilled back to maximum.`;
  } else {
    drawer.style.display = "none";
  }
}

function finishLessonFlow() {
  playSynthesizerSound("click");
  transitionScreen("screen-outro", "screen-dashboard");
  switchTab("path");
}

// ==================== GOOGLE AI STUDIO SANDBOX WORKBENCH ====================
function toggleApiKeyInput() {
  playSynthesizerSound("click");
  const content = document.getElementById("apiKeyCollapse");
  const chevron = document.getElementById("apiKeyChevron");
  
  content.classList.toggle("open");
  chevron.classList.toggle("fa-chevron-down");
  chevron.classList.toggle("fa-chevron-up");
}

function updateSliderVal(sliderId, labelId) {
  const val = document.getElementById(sliderId).value;
  document.getElementById(labelId).textContent = val;
}

async function runSandboxPrompt() {
  playSynthesizerSound("start");
  const apiKey = document.getElementById("pg-api-key").value.trim();
  const model = document.getElementById("pg-model-select").value;
  const temp = parseFloat(document.getElementById("pg-temp").value);
  const topp = parseFloat(document.getElementById("pg-topp").value);
  const system = document.getElementById("pg-system").value.trim();
  const prompt = document.getElementById("pg-prompt").value.trim();
  const outputConsole = document.getElementById("pg-output");

  if (!prompt) {
    outputConsole.textContent = "Error: Prompt workbench empty. Please insert instructions!";
    return;
  }

  outputConsole.innerHTML = `<span class="text-cyan animate-pulse">>>> VITRÜ ANALYZING CHIP CHANNELS... LAUNCHING TELEMETRY STREAM...</span>`;

  // Dynamic Parameter feedback sandbox (simulated text shifts based on temperature)
  if (!apiKey) {
    setTimeout(() => {
      let resultText = "";
      if (temp >= 1.6) {
        // High Temperature chaotic results simulation
        resultText = `[COGNITIVE CHAOS OVERLOAD - TEMP ${temp}]\n`;
        resultText += `Frog matrix says: "Ribbit! Quantum token entropy decay! ${prompt.split(" ").reverse().join(" ... ")}"! Dynamic parameters triggered hallucinations!`;
      } else if (temp <= 0.2) {
        // Strict deterministic classification response
        resultText = `[FACTUAL DETERMINISTIC MODE - TEMP ${temp}]\n`;
        resultText += `Instruction classified successfully. Grounding elements validated. System persona locks down output: "Hello, Developer. The targeted execution parsed correctly. Delimiters matched successfully."`;
      } else {
        // Standard normal response
        resultText = `[SIMULATED GEMINI RESPONSE - TEMP ${temp} / TOP-P ${topp}]\n`;
        resultText += `¡Hola! Soy Vitrü. Veo tu prompt: "${prompt}".\n\nNo has introducido una API Key real en el menú desplegable, así que estoy simulando este canal. Si añades tu API Key de Google AI Studio, haré una petición real en vivo directamente a Google APIs sin guardar nada en servidores externos. ¡Pruébalo!`;
      }
      
      outputConsole.textContent = resultText;
      playSynthesizerSound("correct");
    }, 1500);
    return;
  }

  // Real live direct Google Generative Language API call
  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
    
    // Structured body matching Google API contracts
    const payload = {
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: temp,
        topP: topp
      }
    };

    if (system) {
      payload.systemInstruction = {
        parts: [{ text: system }]
      };
    }

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.error?.message || "API connection failed");
    }

    const data = await response.json();
    const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";
    outputConsole.textContent = generatedText;
    playSynthesizerSound("correct");

  } catch (error) {
    playSynthesizerSound("error");
    outputConsole.innerHTML = `<span class="text-red">API ERROR: ${error.message}</span>`;
  }
}

// ==================== VIEW RENDERING: LEAGUES & PROFILE ====================
function renderLeaderboard() {
  const lang = window.vitruviusState.state.preferredLanguage;
  const board = window.vitruviusState.getLeaderboard();
  const list = document.getElementById("leaderboardList");
  
  if (!list) return;
  list.innerHTML = "";

  board.forEach((user, idx) => {
    const rank = idx + 1;
    const isUser = user.isUser ? "user-row" : "";
    
    // Distribute promotion and demotion zones
    let zone = "";
    if (rank <= 5) zone = "promotion-zone";
    if (rank >= 26) zone = "demotion-zone";

    const row = document.createElement("div");
    row.className = `leaderboard-row ${isUser} ${zone}`;
    
    const isTopThree = rank <= 3 ? "top-three" : "";
    const nameInitial = user.name.charAt(0).toUpperCase();

    row.innerHTML = `
      <span class="rank-number ${isTopThree}">${rank}</span>
      <div class="user-cell">
        <div class="user-avatar-indicator" style="border: 1px solid ${user.avatarColor}; color: ${user.avatarColor}">
          ${nameInitial}
        </div>
        <span class="user-cell-name">${user.name}</span>
      </div>
      <span class="xp-cell">${user.weeklyXP} XP</span>
    `;
    list.appendChild(row);
  });
}

function renderProfile() {
  const lang = window.vitruviusState.state.preferredLanguage;
  const state = window.vitruviusState.state;

  document.getElementById("profileName").innerHTML = `${state.displayName} <i class="fa-solid fa-pen-to-square"></i>`;
  document.getElementById("profileLevelLabel").textContent = `${lang === "es" ? "Nivel" : "Level"} ${state.level}`;

  // Progress variables
  const req = window.vitruviusState.getRequiredXpForLevel(state.level);
  document.getElementById("profileXpProgressText").textContent = `${state.xp} / ${req} XP`;
  const pct = (state.xp / req) * 100;
  document.getElementById("profileXpProgressFill").style.width = `${pct}%`;

  // Toggle visual badge unlocks
  const badges = ["prompt_master", "studio_architect", "source_finder", "deep_mind"];
  badges.forEach(b => {
    const el = document.getElementById(`badge-${b}`);
    if (el) {
      const unlocked = state.unlockedBadges.includes(b) || (b === "deep_mind" && state.streak > 0);
      el.classList.toggle("locked", !unlocked);
    }
  });
}

function editProfileName() {
  playSynthesizerSound("click");
  const lang = window.vitruviusState.state.preferredLanguage;
  const oldName = window.vitruviusState.state.displayName;
  const promptTxt = lang === "es" ? "Introduce tu nuevo nombre de usuario:" : "Enter your new username:";
  const next = prompt(promptTxt, oldName);
  
  if (next && next.trim() !== "") {
    window.vitruviusState.state.displayName = next.trim().substring(0, 16);
    window.vitruviusState.save();
    renderProfile();
    renderLeaderboard();
  }
}

function resetAppProgress() {
  playSynthesizerSound("error");
  const lang = window.vitruviusState.state.preferredLanguage;
  const confirmTxt = lang === "es" ? 
    "¿Estás seguro de que quieres borrar todos tus datos y reiniciar Vitruvius?" : 
    "Are you absolutely sure you want to wipe all statistics and reset Vitruvius?";
  
  if (confirm(confirmTxt)) {
    window.vitruviusState.resetState();
    updateHUD();
    applyLanguage(window.vitruviusState.state.preferredLanguage);
    transitionScreen("screen-dashboard", "screen-splash");
  }
}

// ==================== WEB AUDIO SYNTHESIZER ENGINE ====================
function toggleSound() {
  soundMuted = !soundMuted;
  const icon = document.querySelector("#btn-sound-toggle i");
  
  if (soundMuted) {
    icon.className = "fa-solid fa-volume-xmark";
  } else {
    icon.className = "fa-solid fa-volume-high";
    lazyInitAudio();
  }
}

function lazyInitAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
}

function playSynthesizerSound(type) {
  if (soundMuted) return;
  lazyInitAudio();
  if (!audioCtx || audioCtx.state === "suspended") {
    // Attempt resume context if suspended by browser
    audioCtx.resume();
  }
  
  try {
    const t = audioCtx.currentTime;

    if (type === "click") {
      // Small retro click beep
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(800, t);
      osc.frequency.exponentialRampToValueAtTime(100, t + 0.08);
      
      gain.gain.setValueAtTime(0.08, t);
      gain.gain.linearRampToValueAtTime(0, t + 0.08);
      
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(t);
      osc.stop(t + 0.08);

    } else if (type === "start") {
      // Ascending portal lasers
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(150, t);
      osc.frequency.exponentialRampToValueAtTime(1200, t + 0.25);
      
      gain.gain.setValueAtTime(0.12, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + 0.25);
      
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(t);
      osc.stop(t + 0.25);

    } else if (type === "correct") {
      // Bright double beep chord (ascending major third)
      [523.25, 659.25].forEach((freq, idx) => {
        const timeOffset = idx * 0.07;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, t + timeOffset);
        
        gain.gain.setValueAtTime(0.08, t + timeOffset);
        gain.gain.exponentialRampToValueAtTime(0.005, t + timeOffset + 0.25);
        
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(t + timeOffset);
        osc.stop(t + timeOffset + 0.25);
      });

    } else if (type === "error") {
      // Sub-bass buzz sound
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(110, t);
      osc.frequency.linearRampToValueAtTime(80, t + 0.25);
      
      gain.gain.setValueAtTime(0.1, t);
      gain.gain.linearRampToValueAtTime(0, t + 0.25);
      
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(t);
      osc.stop(t + 0.25);

    } else if (type === "levelUp") {
      // Majestic ascending synth chord arpeggio
      const notes = [261.63, 329.63, 392.00, 523.25, 659.25];
      notes.forEach((freq, idx) => {
        const timeOffset = idx * 0.09;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, t + timeOffset);
        
        gain.gain.setValueAtTime(0.06, t + timeOffset);
        gain.gain.exponentialRampToValueAtTime(0.001, t + timeOffset + 0.45);
        
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(t + timeOffset);
        osc.stop(t + timeOffset + 0.5);
      });
    }
  } catch (err) {
    console.warn("Web Audio block: ", err);
  }
}
