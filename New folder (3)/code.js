const calculator = {
    screen: document.getElementById('screen'),
    buttons: document.querySelectorAll('button'),
    currentInput: '0',
    operator: '',
    firstOperand: null,
    secondOperand: false,
};

calculator.buttons.forEach(button => {
    button.addEventListener('click', event => {
        const { value } = event.target;
        if (value === 'C') {
            calculator.currentInput = '0';
            calculator.firstOperand = null;
            calculator.operator = '';
            calculator.secondOperand = false;
        } else if (value === '=') {
            if (calculator.operator) {
                calculator.currentInput = eval(calculator.firstOperand + calculator.operator + calculator.currentInput).toString();
                calculator.firstOperand = null;
                calculator.operator = '';
                calculator.secondOperand = false;
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (calculator.operator && !calculator.secondOperand) {
                calculator.currentInput = eval(calculator.firstOperand + calculator.operator + calculator.currentInput).toString();
            }
            calculator.firstOperand = calculator.currentInput;
            calculator.operator = value;
            calculator.secondOperand = true;
        } else {
            if (calculator.secondOperand) {
                calculator.currentInput = value;
                calculator.secondOperand = false;
            } else {
                calculator.currentInput = calculator.currentInput === '0' ? value : calculator.currentInput + value;
            }
        }
        calculator.screen.value = calculator.currentInput;
    });
});
