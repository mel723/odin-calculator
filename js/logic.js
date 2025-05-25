let number1 = [0];
let number2 = [];
let currentOperator = null;
let shouldReplace = true;

function reset() {
  number1 = [0];
  number2 = [];
  currentOperator = null;
  shouldReplace = true;

  const display = document.querySelector("#display");
  display.textContent = 0;
}

function storeNumber(number) {
  if (currentOperator === null) {
    if (number === "." && number1.includes(".")) {
      return;
    }

    if (shouldReplace) {
      number1[0] = number;
      shouldReplace = false;
    } else {
      number1.push(number);
    }
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
      if (num2 === 0) {
        reset();
        const display = document.querySelector("#display");
        display.textContent = ";)";
      } else {
        result = num1 / num2;
      }
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
  shouldReplace = true;
}

