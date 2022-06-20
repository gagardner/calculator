let numButtons = document.querySelectorAll(`.num-button`);
let funcButtons = document.querySelectorAll(`.func-button`);
let display = document.querySelector(`.display`);

let firstOperand = ``;
let secondOperand = ``;
let operator = ``;
let result = ``;
let secondOperator = ``;

numButtons.forEach((button) =>{
    button.addEventListener("click", function() {
    processNum(button.textContent);
    });
});

funcButtons.forEach((button) => {
    button.addEventListener("click", function() {
        processFunc(button.textContent);
    });
});

function processNum(input) {
    if (operator === ``) {
        firstOperand += input;
    } else if (operator !== ``) {
        secondOperand += input;
    }
    updateDisplay();
}

function processFunc(input) {
    if (input === `C`) {
        clear();
    } else if (input === `=`) {
        equals();
    } else if (firstOperand !== `` && secondOperand !== ``) {
        equals();
        operator = input;
    } else if (firstOperand !== ``) {
        operator = input;
    }
    updateDisplay();
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "*") {
        return multiply(a, b);
    } else if (operator === "/") {
        return divide(a, b);
    }
}

function equals() {
    result = operate(operator, +firstOperand, +secondOperand);
    firstOperand = result;
    secondOperand = ``;
    operator = ``;
}

function clear() {
    firstOperand = ``;
    secondOperand = ``;
    operator = ``;
    result = ``;
}

function updateDisplay() {
    if (result !== `` && secondOperand === ``) {
        display.textContent = result;
    } else if (secondOperand !== ``) {
        display.textContent = secondOperand;
    } else if (firstOperand !== ``) {
        display.textContent = firstOperand;
    } else {
        display.textContent = ``;
    }
}