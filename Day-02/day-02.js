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