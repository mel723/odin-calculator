const OPERATORS = ["/", "*", "-", "+"];

// Functions that render number buttons
function handleNumberButtonClick(number) {
  const displayText = storeNumber(number);

  const display = document.querySelector("#display");
  display.textContent = displayText.join("");
}

function createNumberPadRow(numbers) {
  const numberPad = document.querySelector(".number-pad");
  const row = document.createElement("div");
  row.classList.add("row");
  
  numbers.forEach((number) => {
    const button = createButton(number, () => handleNumberButtonClick(number));
    row.appendChild(button);
  });

  numberPad.appendChild(row);
}

function createNumberPad() {
  const numberPad = document.querySelector(".number-pad");

  // Utility keys
  const utilityRow = document.createElement("div");
  utilityRow.classList.add("row");
  const clearButton = createButton("AC", () => reset());
  const percentButton = createButton("DEL", () => deleteNumber());
  utilityRow.appendChild(clearButton);
  utilityRow.appendChild(percentButton);
  numberPad.appendChild(utilityRow);

  createNumberPadRow([7, 8, 9]);
  createNumberPadRow([4, 5, 6]);
  createNumberPadRow([1, 2, 3]);
  
  // 0 and . buttons
  const numberPadRow = document.createElement("div");
  numberPadRow.classList.add("row");
  const zeroButton = createButton(0, () => handleNumberButtonClick(0), "66.67%");
  const dotButton = createButton(".", () => handleNumberButtonClick("."));
  numberPadRow.appendChild(zeroButton);
  numberPadRow.appendChild(dotButton);
  numberPad.appendChild(numberPadRow);
}

// Functions that render operator buttons
function createOperatorContainer() {
  const operatorContainer = document.querySelector(".operator-buttons");
  
  for (const operator of OPERATORS) {
    const button = createButton(operator, () => setOperator(operator));
    operatorContainer.appendChild(button);
  }

  const operateButton = createButton("=", () => operate());
  operatorContainer.appendChild(operateButton);
}

// Other functions
function createButton(buttonText, onClick, width) {
  const button = document.createElement("button");
  button.classList.add("button");
  if (!width) {
    button.style.flex = "1";
  } else {
    button.style.width = width;
  }

  button.textContent = buttonText;
  button.addEventListener("click", onClick);
  return button;
}