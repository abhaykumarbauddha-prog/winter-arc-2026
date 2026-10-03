// 1. Select DOM elements
const countDisplay = document.getElementById("counter-value");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
const resetBtn = document.getElementById("reset-btn");

// 2. State management
let count = 0;

// 3. UI Update function (DOM manipulation & dynamic styling)
function updateUI() {
  countDisplay.textContent = count;

  // Visual cues based on number state
  if (count > 0) {
    countDisplay.style.color = "#10b981"; // green
  } else if (count < 0) {
    countDisplay.style.color = "#ef4444"; // red
  } else {
    countDisplay.style.color = "#f8fafc"; // default white
  }
}

// 4. Attach Event Listeners
incrementBtn.addEventListener("click", () => {
  count++;
  updateUI();
});

decrementBtn.addEventListener("click", () => {
  count--;
  updateUI();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateUI();
});