let numButtons = document.querySelectorAll(`.num-button`);
let funcButtons = document.querySelectorAll(`.func-button`);
let display = document.querySelector(`.display`);
//let userInput = ``;
let firstOperand = ``;
let secondOperand = ``;
let operator = ``;
let result = ``;
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
    if (operator === ``) {
        firstOperand += input;
        //display.textContent = firstOperand;
        updateDisplay();
    } else if (operator !== ``) {
        secondOperand += input;
        //display.textContent = secondOperand;
        updateDisplay();
    }
}

function processFunc(input) {
    if (input === `C`) {
        clear();
    } else if (input === `=`) {
        equals();
    } else if (firstOperand !== ``) {
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

function equals() {
    result = operate(operator, +firstOperand, +secondOperand);
    firstOperand = result;
    secondOperand = ``;
    operator = ``;
    updateDisplay();
}

function clear() {
    firstOperand = ``;
    secondOperand = ``;
    operator = ``;
    result = ``;
    updateDisplay();
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