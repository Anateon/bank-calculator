const button = document.getElementById("button");
const result = document.getElementById("result");

button.addEventListener("click", calc);

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
  let P = (monthlyDebtPayment * (1 - Math.pow((1 + monthlyRate), -months))) / monthlyRate;
  P = Math.round(P * 100) / 100;

  console.log(P);
  document.getElementById("result").textContent = P.toLocaleString();
}