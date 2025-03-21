const display = document.getElementById('display');
const buttonsContainer = document.querySelector('.calculator__buttons');

display.value = '0';

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
    const result = eval(display.value);
    if (typeof result === 'number') {
      display.value = result;
    } else {
      display.value = 'Error';
    }
  } catch (error) {
    display.value = 'Error';
  }
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