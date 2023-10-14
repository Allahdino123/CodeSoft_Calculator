document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".button");
  
 
    let currentInput = "";
  
    buttons.forEach(button => {
      button.addEventListener("click", function() {
        const buttonValue = button.textContent;
        
        if (buttonValue === "=") {
          try {
            currentInput = eval(currentInput).toString();
            display.textContent = currentInput;
          } catch (error) {
            display.textContent = "Error";
          }
        } else if (buttonValue === "C") {
          currentInput = "";
          display.textContent = "0";
        } else {
          currentInput += buttonValue;
          display.textContent = currentInput;
        }
      });
    });
  });
  