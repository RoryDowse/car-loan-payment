// Pseudocode

// Perform data validation on inputs

// 1. Collect up to three third-party quotes (optional)
function saveQuotes() {
  const quoteOneStored = document.querySelector("").value.trim(); // work with one quote to start
  localStorage.setItem("quoteOne", JSON.stringify(quoteOneStored));

  const quoteTwoStored = document.querySelector("").value.trim();
  localStorage.setItem("quoteTwo", JSON.stringify(quoteTwoStored));

  const quoteThreeStored = document.querySelector("").value.trim();
  localStorage.setItem("quoteThree", JSON.stringify(quoteThreeStored));

  console.log("Quotes saved to local storage");
}

// document.querySelector("").addEventListener("click", saveQuotes);

// 2. Input MSRP, Down Payment, and Loan Term
let MSRP;
let downPayment;
let loanTerm;
let baseCost;

document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("button[type='submit'");

  button.addEventListener("click", function (event) {
    event.preventDefault();

    MSRP = parseFloat(document.getElementById("car-price").value);
    downPayment = parseFloat(document.getElementById("down-payment").value);
    loanTerm = parseFloat(document.getElementById("loan-term").value);

    console.log(`MSRP: $${MSRP}`);
    console.log(`Down Payment: $${downPayment}`);
    console.log(`Loan Term: ${loanTerm}`);

    // 3. View base monthly cost
    baseCost = (MSRP - downPayment) / loanTerm;
    console.log(`Base Monthly Cost: $${baseCost.toFixed(2)}`);

    let monthlyPayment = document.getElementById("monthly-payment");
    monthlyPayment.textContent = `$${baseCost.toFixed(2)}`;
  });
});

// 4. View difference over loan term between base monthly cost and highest quote
const savedQuoteOne = JSON.parse(localStorage.getItem("quoteOne")); // work with one quote to start
const savedQuoteTwo = JSON.parse(localStorage.getItem("quoteTwo"));
const savedQuoteThree = JSON.parse(localStorage.getItem("quoteThree"));

const priceComparison = savedQuoteOne * loanTerm - baseCost * loanTerm; // only uses first quote to start

function addPriceComparison() {
  const priceComparisonText = document.createElement("p");
  priceComparisonText.textContent = `You could overpay by as much as: $${priceComparison.toFixed(
    2
  )} over the course of the loan`;

  priceComparisonText.appendChild(priceComparisonText); // check correct method of appending
  const priceComparisonTextInsert = document.getElementById("cost-difference");
  document.body.insertBefore(priceComparisonText, priceComparisonTextContent);
}
addPriceComparison();

// const priceComparisonTest = 500 * 72 - 400 * 72; // test inputs for price comparison
// console.log(priceComparisonTest);
// 5. View suggestions for additional costs on button click with tooltip
