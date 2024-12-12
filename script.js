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
const equalButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");

function roundResult(value) {
  return Math.round(value * 100000) / 100000; // Redondea a 5 decimales
}

let shouldResetDisplay = false;

numbers.forEach((button) => {
  button.addEventListener("click", () => {
    if (shouldResetDisplay) {
      // Limpia el display antes de ingresar el nuevo número
      displayValue.textContent = button.textContent;
      shouldResetDisplay = false;
    } else {
      // Continua escribiendo números
      if (displayValue.textContent === "0") {
        displayValue.textContent = button.textContent;
      } else {
        displayValue.textContent += button.textContent;
      }
    }
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentValue = parseFloat(displayValue.textContent);

    if (num1 !== null && operator !== null) {
      // Calcula el resultado parcial y lo redondea
      const result = roundResult(operate(operator, num1, currentValue));
      num1 = result; // Actualiza num1 con el resultado parcial redondeado
      displayValue.textContent = result; // Muestra el resultado parcial
    } else {
      num1 = currentValue; // Guarda el primer número
    }

    operator = button.textContent; // Actualiza el operador
    shouldResetDisplay = true; // Marca que el próximo número debe limpiar el display
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
  const result = roundResult(operate(operator, num1, num2));
  displayValue.textContent = result; // Muestra el resultado final redondeado
  num1 = result; // Prepara num1 para operaciones futuras
  operator = null;
  num2 = null;
  shouldResetDisplay = true; // Limpia el display para la siguiente entrada
});

clearButton.addEventListener("click", () => {
  num1 = null;
  num2 = null;
  operator = null;
  displayValue.textContent = "0";
  shouldResetDisplay = false;
});
