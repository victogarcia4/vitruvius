# 🐸 Vitruvius - Gamified GenAI Simulator

**Vitruvius** is a premium, high-fidelity Progressive Web Application (PWA) and mobile simulator designed to teach Generative AI engineering (Gemini, NotebookLM, Google AI Studio) through gamified micro-learning. Starred by **Vitrü**, a cybernetic tree frog from the future, the app guides you through skill trees, prompt engineering consoles, and interactive parameter tuning.

---

## 🌟 Key Features

1.  **Mobile-First Simulator Frame:** Displays an immersive physical phone layout on desktop viewports and transitions to native fullscreen on actual mobile viewports.
2.  **The Path (El Camino):** A winding vertical skill tree connecting curriculum nodes with dynamically calculated SVG bezier lines. Nodes lock/unlock based on completion state.
3.  **Active Lesson Engine:** High-incentive interactive card types:
    *   *Multiple Choice Cards:* Instant glass-morphism visual evaluations.
    *   *Code Completion Blocks:* Drag-and-drop code tiles that compile inside Python terminals.
    *   *Slider Sandbox:* range sliders linking Temperature and Top-P, with simulated text variance output.
4.  **Google AI Studio Sandbox (Playground):**
    *   *Rule-Based Parser:* Checks prompt Delimiters (`"""` or `<tags>`), Instructions, Role-Prompting, and output requirements to evaluate solutions.
    *   *Live Gemini integration:* Add your own Google AI Studio API key (stored securely in your browser's local storage) to query the real **Gemini 1.5 Flash** or **Gemini 1.5 Pro** models directly!
5.  **Gamification Loops:**
    *   *XP Progression:* Leveling up requires $100 \times Level^{1.5}$ experience points.
    *   *Hearts Regeneration:* Restores 1 heart every 4 hours based on timestamp deltas (does not require background polling).
    *   *Competitor Leagues:* Compete against 29 dynamically updated bots in a weekly leaderboard.
    *   *Retro Audio Synthesizer:* Sci-fi audio alerts synthesized on the fly using the **Web Audio API** (no asset weight).

---

## 🛠️ Tech Stack & Structure

*   **HTML5:** Semantic architecture with unique descriptive test-ids.
*   **CSS3:** Deep slate theme with custom neon glassmorphism variables and layout keyframes.
*   **Vanilla JS (ES6+):** Zero compilation or heavy package dependencies, making it ultra-lightweight and robust.
*   **Web Audio API:** Real-time audio tone synthesis.
*   **Local Storage:** Persistent synchronization of streaks, high scores, hearts, and unlocked achievements.

---

## 🚀 How to Run Locally

Since it's built with pure web technologies, running it takes seconds:

1.  **Open index.html directly:**
    *   Double click `index.html` in your file explorer to open it in Chrome, Safari, or Edge.
2.  **Use a local server (Recommended for local PWA testing):**
    *   If you have Python installed:
        ```bash
        python -m http.server 8000
        ```
    *   If you have NodeJS installed:
        ```bash
        npx serve .
        ```
    *   Then, open `http://localhost:8000` (or `http://localhost:3000`) in your browser.

---

## 📦 Deploying to GitHub Pages (1-Click Hosting)

Make this app immediately accessible to your stakeholders or active players globally:

1.  Initialize git and push these files to a public GitHub repository:
    ```bash
    git init
    git add .
    git commit -m "Initialize Vitruvius Gamified MVP"
    git branch -M main
    git remote add origin https://github.com/YOUR_USERNAME/vitruvius-app.git
    git push -u origin main
    ```
2.  Activate Hosting:
    *   Go to your repository on **GitHub.com**.
    *   Click on **Settings** (gear icon) -> **Pages** (in the sidebar).
    *   Under **Build and deployment**, select **Deploy from a branch**.
    *   Choose **main** (or your active branch) and select the `/ (root)` folder.
    *   Click **Save**.
3.  **Done!** In about 1 minute, your site will be live at `https://YOUR_USERNAME.github.io/vitruvius-app/`.
