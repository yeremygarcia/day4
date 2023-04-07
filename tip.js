// Variable holding the total amount of the bill (before the tip)
let totalBillAmount = 200;

// Function to calculate the tip amount
function calculateTip(amount) {
  const tipAmount = amount * 0.2; // 20% tip
  return tipAmount;
}

// Function to get the total bill amount w/ tip
function getBillTotal(amount) {
  let tipAmount = calculateTip(totalBillAmount);
  let totalAmount = amount + tipAmount;
  return totalAmount;
}

// Console log the results of the functions
console.log("The tip amount is $" + calculateTip(totalBillAmount));

console.log("Total bill amount is $" + getBillTotal(totalBillAmount));
