let numbers = [];
let operator = "";
let result;

const display = document.querySelector("#number-display");
const numberPad = document.querySelector(".number-pad");

let number = 0;

for (let i = 0; i < 4; i++) {
  const row = document.createElement("div");
  row.classList.add("row");

  for (let j = 0; j < 3; j++) {
    if (number > 9) {
      break;
    }

    const button = document.createElement("button");
    button.textContent = number;
    button.addEventListener("click", (e) => {
      numbers.push(Number(e.target.textContent));
      display.textContent = e.target.textContent;
    });
    row.appendChild(button);
    number++;
  }

  numberPad.appendChild(row);
}

function setOperator(character) {
  operator = character;
}

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
  return a / b;
}

function operate() {
  const num1 = numbers[0];
  const num2 = numbers[1];

  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
  }
  
  numbers.splice(0, numbers.length);
  numbers.push(result);

  display.textContent = result;
}