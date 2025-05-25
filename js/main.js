createNumberPad();
createOperatorContainer();

document.addEventListener("keydown", (e) => {
  const input = e.key;

  // Operator keys
  if (OPERATORS.includes(input)) {
    setOperator(input);
    return;
  }
  
  // Number and . keys
  const regex = /[0-9.]/g;
  if (regex.test(input)) {
    storeNumber(input);
    return;
  }
  
  // Enter keys
  if (input === "Enter" || input === "=") {
    operate();
  }
})

// TODOS:
// - Repeat operation on result when pressing 
//   = button after getting result