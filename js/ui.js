const OPERATORS = ["/", "*", "-", "+"];

// Functions that render number buttons
function handleNumberButtonClick(number) {
  const displayText = storeNumber(number);

  const display = document.querySelector("#number-display");
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
  createNumberPadRow([7, 8, 9]);
  createNumberPadRow([4, 5, 6]);
  createNumberPadRow([1, 2, 3]);
  createNumberPadRow([0, "."])
}

// Functions that render operator buttons
function createOperatorContainer() {
  const operatorContainer = document.querySelector(".operator-container");
  
  for (const operator of OPERATORS) {
    const button = createButton(operator, () => setOperator(operator));
    operatorContainer.appendChild(button);
  }

  const operateButton = document.createElement("button");
  operateButton.textContent = "=";
  operateButton.addEventListener("click", () => {
    operate();
  });

  operatorContainer.appendChild(operateButton);
}

// Other functions
function createButton(buttonText, onClick) {
  const button = document.createElement("button");
  button.textContent = buttonText;
  button.addEventListener("click", onClick);
  return button;
}