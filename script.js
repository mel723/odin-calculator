let number1 = [];
let number2 = [];
let operator = null;

function storeNumber(number) {
  if (operator === null) {
    if (number === "." && number1.includes(".")) {
      return;
    }

    number1.push(number);
    return number1;
  }

  if (number === "." && number2.includes(".")) {
    return;
  }

  number2.push(number);
  return number2
}

function handleNumberButtonClick(number) {
  const displayText = storeNumber(number);

  const display = document.querySelector("#number-display");
  display.textContent = displayText.join("");
}

function createNumberButton(number) {
  const button = document.createElement("button");
  button.textContent = number;
  button.addEventListener("click", () => {
    handleNumberButtonClick(number)
  });
  return button;
}

function createNumberPadRow(numbers) {
  const numberPad = document.querySelector(".number-pad");
  const row = document.createElement("div");
  row.classList.add("row");
  
  numbers.forEach((number) => {
    const button = createNumberButton(number);
    row.appendChild(button);
  });

  numberPad.appendChild(row);
}

function setOperator(character) {
  operator = character;
}

function operate() {
  if (number1.length === 0 || number2.length === 0 || operator === null) {
    return;
  }

  const num1 = parseFloat(number1.join(""));
  const num2 = parseFloat(number2.join(""));
  
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
  }

  // Clear number arrays
  number1.splice(0, number1.length);
  number2.splice(0, number2.length);
  operator = null;
  
  // Display the result
  const display = document.querySelector("#number-display");
  display.textContent = result;
  
  // Add the result to the array
  number1.push(result);
}

function createNumberPad() {
  createNumberPadRow([7, 8, 9]);
  createNumberPadRow([4, 5, 6]);
  createNumberPadRow([1, 2, 3]);
  createNumberPadRow([0, "."])
}

createNumberPad();

