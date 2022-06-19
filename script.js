let numButtons = document.querySelectorAll(`.num-button`);
let funcButtons = document.querySelectorAll(`.func-button`);
let display = document.querySelector(`.display`);
//let userInput = ``;
let firstOperand = ``;
let secondOperand = ``;
let operator = null;
//let secondOperator = null;

numButtons.forEach((button) =>{
    button.addEventListener("click", function() {
    //userInput += button.textContent;
    processNum(button.textContent);
    //display.textContent = text;        
    });
});

funcButtons.forEach((button) => {
    button.addEventListener("click", function() {
        processFunc(button.textContent);
    });
});

function processNum(input) {
    if (operator === null) {
        firstOperand += input;
        display.textContent = firstOperand;
    } else if (operator !== null) {
        secondOperand += input;
        display.textContent = secondOperand;
    }
}

function processFunc(input) {
    if (input === `=`) {
        let result = operate(operator, +firstOperand, +secondOperand);
        display.textContent = result;
    }
    if (firstOperand) {
        operator = input;
    }
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