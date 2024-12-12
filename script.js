function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) return "Error";
  return a / b;
}

let num1 = null;
let operator = null;
let num2 = null;

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);

    case "-":
      return subtract(num1, num2);

    case "*":
      return multiply(num1, num2);

    case "/":
      return divide(num1, num2);

    default:
      return "Invalid operator";
  }
}

const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const displayValue = document.querySelector("#displayValue");

numbers.forEach((button) => {
  button.addEventListener("click", () => {
    if (displayValue.textContent === "0") {
      displayValue.textContent = button.textContent;
    } else {
      displayValue.textContent += button.textContent;
    }
  });
});
