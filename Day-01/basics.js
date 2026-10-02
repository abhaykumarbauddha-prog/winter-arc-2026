// ==========================================
// Program 1: Variable Swap & Arithmetic (Operators)
// ==========================================
let a = 15;
let b = 25;
console.log(`Original: a = ${a}, b = ${b}`);

// Swap using arithmetic
a = a + b; // 40
b = a - b; // 15
a = a - b; // 25
console.log(`Swapped: a = ${a}, b = ${b}`);

// ==========================================
// Program 2: Type Checking & Coercion (Data Types)
// ==========================================
const userName = "Anuj";
const score = 95;
const isDev = true;
const pendingTask = null;
let feedback;

console.log("Types:", typeof userName, typeof score, typeof isDev, typeof pendingTask, typeof feedback);
// Strict vs Loose equality check
console.log("5 == '5':", 5 == '5');   // true (type coercion)
console.log("5 === '5':", 5 === '5'); // false (strict check)

// ==========================================
// Program 3: Grade Evaluator (if/else conditionals)
// ==========================================
const marks = 82;

if (marks >= 90) {
  console.log("Grade: A+");
} else if (marks >= 80) {
  console.log("Grade: A");
} else if (marks >= 60) {
  console.log("Grade: B");
} else {
  console.log("Grade: Needs Improvement");
}

// ==========================================
// Program 4: FizzBuzz (Loops + Modulo Operator)
// ==========================================
console.log("--- FizzBuzz (1 to 15) ---");
for (let i = 1; i <= 15; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// ==========================================
// practice problems
// ==========================================

//01

let num = 28;

if(num % 2 === 0) {
    console.log("28 is Even")
} else {
    console.log("28 is Odd")
}

// 02

for(let i = 10; i>=1; i--) {
    if(i === 5) {
        console.log("Halfway there!")
    } else {
        console.log(i);
    }
}

//03

const scores = [45, 89, 12, 95, 63, 77];
let max = scores[0];
let index = 1; // 'index' use kiya

while (index < scores.length) {
  if (scores[index] > max) {
    max = scores[index];
  }
  index++;
}

console.log("Highest score is: " + max);