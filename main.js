// VARIABLES

const current = document.querySelector(".display-current");
const last = document.querySelector(".display-last");
const clearBtn = document.querySelector(".clear-btn");
const numberBtns = document.querySelectorAll(".number-btn");
const operationBtns = document.querySelectorAll(".operation-btn");

current.innerHTML = "0";

// EVENT LISTENERS

clearBtn.addEventListener("click", () => {
  current.innerHTML = "0";
  last.innerHTML = "";
});

numberBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    let currentValue = current.innerHTML;
    if (currentValue === "0") {
      currentValue = e.target.value;
    } else {
      currentValue += e.target.value;
    }

    current.innerHTML = currentValue;
  });
});

operationBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target.value);
  });
});

// FUNCTIONS

const add = (a, b) => {
  return a + b;
};

const substract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

const operate = (firstValue, secondValue, operator) => {
  switch (operator) {
    case "+":
      return add(firstValue, secondValue);
    case "-":
      return substract(firstValue, secondValue);
    case "*":
      return multiply(firstValue, secondValue);
    case "/":
      return divide(firstValue, secondValue);
  }
};

// TESTING

console.log(operate(1, 2, "+"));
console.log(operate(1, 2, "-"));
console.log(operate(1, 2, "*"));
console.log(operate(1, 2, "/"));
