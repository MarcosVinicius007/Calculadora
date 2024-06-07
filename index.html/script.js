// JavaScript (in script.js file)
let result = document.getElementById("result");
let currentOperation = "";

function append(char) {
  if (char === "=") {
    try {
      result.value = eval(currentOperation);
      currentOperation = "";
    } catch (e) {
      result.value = "Error";
      currentOperation = "";
    }
  } else {
    currentOperation += char;
    result.value = currentOperation;
  }
}