const display = document.getElementById('display');
const buttonsContainer = document.querySelector('.calculator__buttons');

display.value = '0';

display.addEventListener('input', () => {
    if (display.classList.contains('error')) {
      display.classList.remove('error');
    }
  });

buttonsContainer.addEventListener('click', function (event) {
  const target = event.target;

  if (target.tagName !== 'BUTTON') return;

  const buttonValue = target.getAttribute('data-value');
  const action = target.getAttribute('data-action');

  if (action === 'clear') {
    clearDisplay();
  } else if (action === 'calculate') {
    calculateResult();
  } else if (buttonValue) {
    appendValue(buttonValue);
  }
});

function appendValue(value) {
    if (display.value === '0' && value !== '.') {
      display.value = value; 
    } else {
      display.value += value;
    }
  }

function clearDisplay() {
  display.value = '0';
}

function calculateResult() {
  try {
    const result = parseAndEvaluate(display.value);
    if (typeof result === 'number' && !isNaN(result) && isFinite(result)) {
      display.value = result;
    } else {
      display.value = 'Error';
    }
  } catch (error) {
    display.value = 'Error';
  }
}

function parseAndEvaluate(expression) {
    expression = expression.replace(/\s+/g, '');

    const tokens = expression.match(/(\d+\.?\d*|\+|\-|\*|\/)/g);
    if (!tokens) return NaN;

    // multiplication and division
    let newTokens = [];
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === '*' || tokens[i] === '/') {
            const operator = tokens[i];
            const prev = parseFloat(newTokens.pop());
            const next = parseFloat(tokens[++i]);
            const partialResult = operator === '*' ? prev * next : prev / next;
            newTokens.push(partialResult);
        } else {
        newTokens.push(tokens[i]);
        }
    }

    // addition and subtraction
    let result = parseFloat(newTokens[0]);
    for (let i = 1; i < newTokens.length; i+=2) {
        const operator = newTokens[i];
        const next = parseFloat(newTokens[i + 1]);
        if (operator === '+') {
        result += next;
        } else if (operator === '-') {
        result -= next;
        }
    }
    return result;
}

document.addEventListener('keydown', function (event) {
    const key = event.key;
  
    if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
      appendValue(key);
    } else if (key === 'Enter' || key === '=') {
      calculateResult();
    } else if (key === 'Backspace') {
      removeLastCharacter();
    } else if (key === 'Escape') {
      clearDisplay();
    }
  });
  
  function removeLastCharacter() {
    if (display.value.length > 1) {
      display.value = display.value.slice(0, -1);
    } else {
      display.value = '0';
    }
  }