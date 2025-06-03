const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let result = null;
let operator = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            currentInput = '';
            result = null;
            operator = null;
            display.textContent = '0';
        } else if (value === '=') {
            if (operator && currentInput) {
                result = eval(result + operator + currentInput);
                display.textContent = result;
                currentInput = '';
                operator = null;
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (result === null && currentInput) {
                result = currentInput;
            } else if (result !== null && currentInput) {
                result = eval(result + operator + currentInput);
            }
            operator = value;
            currentInput = '';
            display.textContent = result;
        } else {
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});
