document.getElementById("button").addEventListener("click", calc);
document.getElementById("button2").addEventListener("click", calc2);

function rounding(number) {
  return parseFloat(number.toFixed(2)).toLocaleString()
}

function calc() {
  // Data
  let netProfit = document.getElementById("net-profit").value
  let DSCR = 1.25;
  let annualRate = document.getElementById("annual-rate").value * 0.01;
  let monthlyRate = annualRate / 12;
  let termInYears = document.getElementById("period-in-years").value
  let months = termInYears * 12;

  // Calculation of annual and monthly debt payments
  let annualDebtPayment = netProfit / DSCR;
  let monthlyDebtPayment = annualDebtPayment / 12;

  // Calculation of maximum loan limit
  let result = rounding((monthlyDebtPayment * (1 - Math.pow((1 + monthlyRate), -months))) / monthlyRate);

  console.log(result);
  document.getElementById("result").textContent = result;
}


function calc2() {
  let annualRevenue = document.getElementById("annual-revenue").value

  let revolvingCreditResult = rounding(annualRevenue / 12 * 2);
  let overdraftResult = rounding(annualRevenue / 12 * 0.3);

  document.getElementById("revolving-credit-result").textContent = revolvingCreditResult;
  document.getElementById("overdraft-result").textContent = overdraftResult;
}