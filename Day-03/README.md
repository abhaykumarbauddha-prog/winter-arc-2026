# ⚡ Day 03: Interactive Counter App

A lightweight, responsive Counter Web Application built using vanilla JavaScript DOM manipulation, HTML5, and modern CSS3. Part of the **Winter ARC 2026** challenge.

---

## 🚀 Features

- **Increment (`+`)**: Increases current count by 1.
- **Decrement (`-`)**: Decreases current count by 1.
- **Reset**: Instantly resets the count to `0`.
- **Dynamic UI State Feedback**:
  - Green text for positive values (`> 0`).
  - Red text for negative values (`< 0`).
  - Neutral white text for zero (`0`).
- **Responsive Card Layout**: Clean centered dark-theme interface with tactile button press feedback.

---

## 🛠️ Tech Stack

- **HTML5**: Semantic document structure (`<main>`, `<section>`).
- **CSS3**: Flexbox, smooth color/scale transitions, modern dark theme palette.
- **JavaScript (Vanilla / ES6)**: Event listeners, state handling, and direct DOM property mutations.

---

## 🧠 DOM Concepts Mastered

| Concept | Usage in Project |
| :--- | :--- |
| `document.getElementById()` | Targeted selection of buttons and count display |
| `element.textContent` | Safe, performant updating of numeric counter text |
| `element.style.color` | Dynamic inline CSS manipulation based on state conditions |
| `element.addEventListener()` | Binding `'click'` events to UI interaction handlers |

---

## 📂 File Structure

```text
Day-03/
├── index.html       # Application markup and skeleton
├── style.css        # Layout, colors, and button transitions
├── script.js       # State tracking and event handlers
└── README.md        # Project documentation