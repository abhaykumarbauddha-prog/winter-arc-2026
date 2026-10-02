// ==========================================
// DAY 02: Functions, Objects, & Array Methods
// ==========================================

// 1. DATASET: Array of Objects
const inventory = [
  { id: 101, title: "Wireless Mouse", price: 800, category: "Electronics", inStock: true },
  { id: 102, title: "Mechanical Keyboard", price: 3200, category: "Electronics", inStock: false },
  { id: 103, title: "Coffee Mug", price: 350, category: "Lifestyle", inStock: true },
  { id: 104, title: "Notebook & Pen Set", price: 200, category: "Stationery", inStock: true },
  { id: 105, title: "Noise Cancelling Headphones", price: 4500, category: "Electronics", inStock: true }
];

// ==========================================
// 2. FUNCTIONS & ARROW FUNCTIONS
// ==========================================

// Regular Function: Tax calculator
function calculateGST(price, gstRate = 18) {
  return price + (price * gstRate) / 100;
}

// Arrow Function: Format price to INR string
const formatCurrency = (amount) => `₹${amount.toFixed(2)}`;

// ==========================================
// 3. ARRAY METHODS: push() & pop()
// ==========================================

// Naya product list ke end me add karna
inventory.push({
  id: 106,
  title: "Desk Mat",
  price: 600,
  category: "Lifestyle",
  inStock: true
});
console.log("Product count after push:", inventory.length);

// Last product ko temporary pop karke check karna
const lastRemoved = inventory.pop();
console.log("Popped item:", lastRemoved.title);

// Wapas add kar dete hain workflow ke liye
inventory.push(lastRemoved);

// ==========================================
// 4. filter(): Stock & Price Filtering
// ==========================================

// Task A: Sirf wo products jo stock me hain
const availableProducts = inventory.filter((item) => item.inStock === true);
console.log(`Available items count: ${availableProducts.length}`);

// Task B: Budget Electronics items (Category === 'Electronics' AND price < 3500)
const budgetElectronics = inventory.filter(
  (item) => item.category === "Electronics" && item.price < 3500
);
console.log("Budget Electronics:", budgetElectronics);

// ==========================================
// 5. map(): Data Transformation
// ==========================================

// Task: Har product ke liye ek summary card object banao jisme price with GST calculate ho
const catalogCards = inventory.map((item) => {
  const finalPrice = calculateGST(item.price);
  return {
    id: item.id,
    label: item.title.toUpperCase(),
    basePrice: formatCurrency(item.price),
    finalPriceWithTax: formatCurrency(finalPrice),
    status: item.inStock ? "Available" : "Out of Stock"
  };
});

console.log("--- Transformed Catalog (via map) ---");
console.log(catalogCards);

// ==========================================
// 6. forEach(): Iteration / Display
// ==========================================

// Har item ko formatted tareeqe se console par render karna
console.log("\n--- Final Store Inventory Display (via forEach) ---");
catalogCards.forEach((card, index) => {
  console.log(
    `[Item ${index + 1}] ${card.label} | Final Price: ${card.finalPriceWithTax} | Status: ${card.status}`
  );
});

// ==========================================
// DAY 02: 8 Core JavaScript Practice Problems
// ==========================================

// ------------------------------------------
// Problem 1: Sum of Array
// ------------------------------------------
function calculateArraySum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

const numbersList = [10, 25, 40, 15, 30];
console.log("P1 - Sum of Array:", calculateArraySum(numbersList)); // 120

// ------------------------------------------
// Problem 2: Find Maximum
// ------------------------------------------
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

const scores = [45, 89, 12, 95, 63, 77];
console.log("P2 - Maximum Number:", findMax(scores)); // 95

// ------------------------------------------
// Problem 3: Find Minimum
// ------------------------------------------
function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

console.log("P3 - Minimum Number:", findMin(scores)); // 12

// ------------------------------------------
// Problem 4: Count Even Numbers
// ------------------------------------------
function countEvenNumbers(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}

const sampleData = [12, 7, 19, 24, 36, 41, 50];
console.log("P4 - Count of Even Numbers:", countEvenNumbers(sampleData)); // 4 (12, 24, 36, 50)

// ------------------------------------------
// Problem 5: Reverse an Array (Without using built-in .reverse())
// ------------------------------------------
function reverseArray(arr) {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

const originalList = [1, 2, 3, 4, 5];
console.log("P5 - Reversed Array:", reverseArray(originalList)); // [5, 4, 3, 2, 1]

// ------------------------------------------
// Problem 6: Filter Numbers Greater Than 50 (Using .filter())
// ------------------------------------------
function filterAboveFifty(arr) {
  return arr.filter((num) => num > 50);
}

const mixedValues = [23, 67, 89, 12, 50, 51, 99, 44];
console.log("P6 - Numbers > 50:", filterAboveFifty(mixedValues)); // [67, 89, 51, 99]

// ------------------------------------------
// Problem 7: Create Student Object
// ------------------------------------------
const studentProfile = {
  rollNo: 101,
  name: "Anuj Kumar",
  course: "Web Development",
  subjects: ["JavaScript", "Git", "HTML", "CSS"],
  isGraduated: false,
  marks: [85, 90, 78, 92]
};

console.log("P7 - Student Object:", studentProfile);
console.log(`Student Name: ${studentProfile.name}, First Subject: ${studentProfile.subjects[0]}`);

// ------------------------------------------
// Problem 8: Function Calculating Average Marks
// ------------------------------------------
function calculateAverageMarks(student) {
  const marksArray = student.marks;
  let total = 0;

  for (let i = 0; i < marksArray.length; i++) {
    total += marksArray[i];
  }

  const average = total / marksArray.length;
  return average;
}

const avgScore = calculateAverageMarks(studentProfile);
console.log(`P8 - Average marks for ${studentProfile.name}:`, avgScore); // 86.25