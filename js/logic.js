let number1 = [];
let number2 = [];
let currentOperator = null;

function reset() {
  number1 = [];
  number2 = [];
  currentOperator = null;

  const display = document.querySelector("#display");
  display.textContent = 0;
}

function storeNumber(number) {
  if (currentOperator === null) {
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
  return number2;
}

function setOperator(character) {
  currentOperator = character;
}

function operate() {
  if (number1.length === 0 || number2.length === 0 || currentOperator === null) {
    return;
  }

  const num1 = parseFloat(number1.join(""));
  const num2 = parseFloat(number2.join(""));
  
  switch (currentOperator) {
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

  // Round answers to 6 decimal places
  result = Math.round(result * 1000000) / 1000000;

  // Clear number arrays
  number1.splice(0, number1.length);
  number2.splice(0, number2.length);
  currentOperator = null;
  
  // Display the result
  const display = document.querySelector("#display");
  display.textContent = result;
  
  // Add the result to the array
  number1.push(result);
}

