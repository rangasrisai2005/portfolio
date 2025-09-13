function calculateCompoundInterest(principal, annualRate, timesCompounded, years) {
  const rate = annualRate / 100; // convert percentage to decimal
  const amount = principal * Math.pow((1 + rate / timesCompounded), timesCompounded * years);
  return amount.toFixed(2); // round to 2 decimal places
}

// Example usage:
const principal = 1000;         // Initial investment
const annualRate = 5;           // 5% annual interest
const timesCompounded = 4;      // Quarterly compounding
const years = 3;                // Investment duration

const result = calculateCompoundInterest(principal, annualRate, timesCompounded, years);
console.log("Final Amount: $" + result);  // Output: Final Amount: $1159.27
