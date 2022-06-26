let numButtons = document.querySelectorAll(`.num-button`);
let funcButtons = document.querySelectorAll(`.func-button`);
let equalsButton = document.querySelector(`.equals-button`);
let decimalButton = document.querySelector(`.decimal-button`);
let delButton = document.querySelector(`.del-button`);
let display = document.querySelector(`.display`);

let firstOperand = `0`;
let secondOperand = ``;
let operator = ``;
let result = ``;
let lastOperator = ``;
let secondOperandStore = ``;

numButtons.forEach((button) =>{
    button.addEventListener("click", function() {
        processNum(button.textContent);
        updateDisplay();
    });
});

funcButtons.forEach((button) => {
    button.addEventListener("click", function() {
        processFunc(button.textContent);
        updateDisplay();
    });
});

equalsButton.addEventListener("click", () => {
    equals();
    updateDisplay();
});

decimalButton.addEventListener("click", () => {
    addDecimal();
    updateDisplay();
});

delButton.addEventListener("click", () => {
    deleteInput();
    updateDisplay();
})

function processNum(input) {
    if (operator === ``) {
        if (firstOperand === 0 && input === `0`) {
            return;
        } else if (firstOperand === `0` && input !== 0) {
            firstOperand = input;
        } else {
            firstOperand += input;
        }
    } else if (operator !== ``) {
        if (secondOperand === ``) {
            secondOperand = input;
        } else if (operator !== `` && secondOperand === `0` && input !== `.`) {
            secondOperand = input;
        } else {
            secondOperand += input;
        }
    }
    secondOperandStore = secondOperand;
}

function processFunc(input) {
    if (input === `C`) {
        clear();
    } else if (firstOperand !== `0` && secondOperand !== ``) {
        equals();
        operator = input;
    } else if (firstOperand !== `0`) {
        operator = input;
    }
    lastOperator = input;
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
        return add(+a, +b);
    } else if (operator === "-") {
        return subtract(+a, +b);
    } else if (operator === "*") {
        return multiply(+a, +b);
    } else if (operator === "/") {
        return divide(+a, +b);
    }
}

function equals() {
    if (secondOperand === `` && secondOperandStore === ``) {
        return;
    } else if (firstOperand !== `0` && secondOperand !== ``) {
        result = operate(operator, firstOperand, secondOperand);
    } else if (firstOperand !== `0` && secondOperand === ``) {
        result = operate(lastOperator, firstOperand, secondOperandStore);
    }

    firstOperand = round(result).toString();
    secondOperand = ``;
    result = ``;
    //operator = ``;
    //updateDisplay();
}

function clear() {
    firstOperand = `0`;
    secondOperand = ``;
    operator = ``;
    result = ``;
}

function addDecimal() {
    if (!firstOperand.includes(`.`) && operator === ``) {
        firstOperand += `.`;
        decimalButton.removeEventListener("click", null);
    } else if (operator !== `` && !secondOperand.includes(`.`)) {
        if (secondOperand.length === 0) {
            secondOperand += `0.`;
        } else {
            secondOperand += `.`;
            //updateDisplay();
            decimalButton.removeEventListener("click", null);
        }
    }
}

function deleteInput() {
    if (operator === `` && firstOperand.length === 1) {
        firstOperand = `0`;
    } else if (operator === ``) {
        firstOperand = firstOperand.slice(0, -1);
    } else if (operator !== `` && secondOperand.length === 1) {
        secondOperand = `0`;
    } else if (operator !== ``) {
        secondOperand = secondOperand.slice(0, -1);
    }
}

function round(num) {
    return Math.round(num * 100000) / 100000;
}

function updateDisplay() {
    
    if (operator !== `` && secondOperand.length === 0) {
        display.textContent = firstOperand;
    } else if (operator !== `` && secondOperand.length >= 1) {
        display.textContent = secondOperand;
    } else if (operator === ``) {
        display.textContent = firstOperand;
    } else {
        display.textContent = `0`;
    }
}

updateDisplay();