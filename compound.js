function compoundInterest(principal, annualRate, timesCompounded, years) {
  // Convert annual rate percentage to decimal
  let r = annualRate / 100;

  // Calculate compound interest
  let amount = principal * Math.pow((1 + r / timesCompounded), timesCompounded * years);

  return amount;
}

// Example usage:
let principal = 1000;         // $1000
let annualRate = 5;           // 5% interest rate
let timesCompounded = 4;      // Quarterly compounding
let years = 10;               // For 10 years

let finalAmount = compoundInterest(principal, annualRate, timesCompounded, years);
console.log(`Final Amount after ${years} years: $${finalAmount.toFixed(2)}`);