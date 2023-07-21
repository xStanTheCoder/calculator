// VARIABLES

const current = document.querySelector(".display-current");
const last = document.querySelector(".display-last");
const clearBtn = document.querySelector(".clear-btn");
const numberBtns = document.querySelectorAll(".number-btn");
const operationBtns = document.querySelectorAll(".operation-btn");
const equalBtn = document.querySelector(".equal-btn");

let firstNumber = undefined;
let secondNumber = undefined;
let operator = undefined;
let result = undefined;

// EVENT LISTENERS

numberBtns.forEach((button) => {
  button.addEventListener("click", populateNumber);
});

operationBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (operator && secondNumber === undefined) {
      secondNumber = Number(current.innerHTML);
      result = operate(firstNumber, secondNumber, operator);
      operator = e.target.value;
      firstNumber = result;
      last.innerHTML = `${result} ${operator}`;
      current.innerHTML = "0";
      secondNumber = undefined;
    } else if (firstNumber && operator === undefined) {
      operator = e.target.value;
      last.innerHTML = `${firstNumber} ${operator}`;
    } else {
      firstNumber = Number(current.innerHTML);
      operator = e.target.value;
      current.innerHTML = "0";
      last.innerHTML = `${firstNumber} ${operator}`;
    }
  });
});

equalBtn.addEventListener("click", () => {
  if (operator && secondNumber === undefined) {
    secondNumber = Number(current.innerHTML);
    result = operate(firstNumber, secondNumber, operator);
    firstNumber = result;
    last.innerHTML = result;
    current.innerHTML = "0";
    operator = undefined;
    secondNumber = undefined;
  }
});

clearBtn.addEventListener("click", () => {
  current.innerHTML = "0";
  last.innerHTML = "";
  firstNumber = undefined;
  secondNumber = undefined;
  operator = undefined;
  result = undefined;
});

// FUNCTIONS

function populateNumber(e) {
  if (current.innerHTML === "0") {
    current.innerHTML = e.target.value;
  } else {
    current.innerHTML += e.target.value;
  }
}

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return null;
  }
  return a / b;
}

function operate(firstValue, secondValue, operator) {
  switch (operator) {
    case "+":
      return add(firstValue, secondValue);
    case "-":
      return substract(firstValue, secondValue);
    case "×":
      return multiply(firstValue, secondValue);
    case "÷":
      return divide(firstValue, secondValue);
    default:
      return "Error: Invalid operator";
  }
}
