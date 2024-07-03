document.addEventListener('DOMContentLoaded', function() {
  var display = document.getElementById('calculator-display');
  var memory = 0;
  var string = "";

  // Function to append text to display
  function appendToDisplay(text) {
    string += text;
    display.value += text;
  }

  // Function to clear the calculator display
  function clearDisplay() {
    display.value = '';
    string = '';
  }

  // Function to handle backspace
  function backspace() {
    display.value = display.value.slice(0, -1);
    string = string.slice(0, -1);
  }

  // Function to add to memory (M+)
  function addToMemory() {
    var currentValue = parseFloat(display.value);
    memory += currentValue;
    display.value = '';
  }

  // Function to subtract from memory (M-)
  function subtractFromMemory() {
    var currentValue = parseFloat(display.value);
    memory -= currentValue;
    display.value = '';
  }

  // Function to clear memory (MC)
  function clearMemory() {
    memory = 0;
  }

  // Function to calculate percentage
  function calculatePercentage() {
    var currentValue = parseFloat(display.value);
    var result = currentValue / 100;
    display.value = result;
    string = result.toString();
  }

  // Function to calculate logarithm (log base 10)
  function calculateLogarithm() {
    var currentValue = parseFloat(display.value);
    var result = Math.log10(currentValue);
    display.value = result;
    string = result.toString();
  }

  // Function to calculate square root
  function calculateSquareRoot() {
    var currentValue = parseFloat(display.value);
    var result = Math.sqrt(currentValue);
    display.value = result;
    string = result.toString();
  }

  // Function to calculate cube root
  function calculateCubeRoot() {
    var currentValue = parseFloat(display.value);
    var result = Math.cbrt(currentValue);
    display.value = result;
    string = result.toString();
  }

  // Function to evaluate the expression in the calculator display
  function evaluateExpression() {
    var expression = display.value;
    try {
      var result = eval(expression); // Using eval for simplicity (consider security implications)
      if (isNaN(result) || !isFinite(result)) {
        throw new Error('Invalid expression');
      }
      display.value = result;
      string = result.toString();
    } catch (error) {
      display.value = 'Error'; // Handle calculation errors gracefully
      string = '';
    }
  }

  // Add event listeners to all buttons
  var buttons = document.querySelectorAll('.button');
  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      var buttonText = button.textContent;

      switch (buttonText) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '%':
          appendToDisplay(buttonText);
          break;
        case '=':
          evaluateExpression();
          break;
        case 'AC':
          clearDisplay();
          break;
        case 'C':
          backspace();
          break;
        case 'M+':
          addToMemory();
          break;
        case 'M-':
          subtractFromMemory();
          break;
        case 'MC':
          clearMemory();
          break;
        case 'log':
          calculateLogarithm();
          break;
        case '√':
          calculateSquareRoot();
          break;
        case '∛':
          calculateCubeRoot();
          break;
        default:
          appendToDisplay(buttonText);
          break;
      }
    });
  });
});
