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
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector("#equal");
const clearButton = document.querySelector("#clear");

numbers.forEach((button) => {
  button.addEventListener("click", () => {
    if (displayValue.textContent === "0") {
      displayValue.textContent = button.textContent;
    } else {
      displayValue.textContent += button.textContent;
    }
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    num1 = parseFloat(displayValue.textContent);
    operator = button.textContent;
    displayValue.textContent = "";
  });
});

equalButton.addEventListener("click", () => {
  if (
    operator === null ||
    isNaN(num1) ||
    isNaN(parseFloat(displayValue.textContent))
  ) {
    displayValue.textContent = "Error";
    return;
  }

  num2 = parseFloat(displayValue.textContent);
  const result = operate(operator, num1, num2);
  displayValue.textContent = result;
  num1 = result;
  operator = null;
  num2 = null;
});

clearButton.addEventListener("click", () => {
  num1 = null;
  num2 = null;
  operator = null;
  displayValue.textContent = "0";
});
