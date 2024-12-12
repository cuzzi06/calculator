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
      add(num1, num2);
      break;

    case "-":
      subtract(num1, num2);
      break;

    case "*":
      multiply(num1, num2);
      break;

    case "/":
      divide(num1, num2);
      break;

    default:
      break;
  }
}
