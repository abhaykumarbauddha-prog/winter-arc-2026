// ==========================================
// 1. VARIABLES & DATA TYPES
// ==========================================
// const aur let modern JavaScript (ES6) ke standards hain.
const courseName = "JavaScript Fundamentals"; // String
let studentAge = 20;                        // Number
let isEnrolled = true;                      // Boolean
let finalScore = null;                      // Null
let grade;                                  // Undefined

console.log("Course:", courseName, typeof courseName);
console.log("Age:", studentAge, typeof studentAge);

// ==========================================
// 2. OPERATORS
// ==========================================
let num1 = 10;
let num2 = 5;

// Arithmetic Operators
let sum = num1 + num2;        // 15
let product = num1 * num2;    // 50

// Comparison & Logical Operators
let isGreater = num1 > num2;  // true
let isValid = (num1 > 5) && (num2 < 10); // true

// ==========================================
// 3. IF / ELSE (Conditional Statements)
// ==========================================
let score = 82;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B");
} else {
  console.log("Grade: Needs Improvement");
}

// ==========================================
// 4. LOOPS (Iteration)
// ==========================================
// For Loop: 1 se 5 tak print karna
console.log("Counting using For Loop:");
for (let i = 1; i <= 5; i++) {
  console.log(`Number: ${i}`);
}

// Array & Loop combination
const topics = ["Variables", "Operators", "Conditions", "Loops"];
console.log("Topics to cover:");
for (let j = 0; j < topics.length; j++) {
  console.log(`- ${topics[j]}`);
}