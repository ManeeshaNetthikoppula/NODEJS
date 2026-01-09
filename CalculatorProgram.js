// calculator.js
const a = Number(process.argv[2]);
const b = Number(process.argv[3]);

if (isNaN(a) || isNaN(b)) {
  console.log("Please provide two numbers");
  process.exit();
}

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", (a / b).toFixed(2));
