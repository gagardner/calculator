let buttons = document.querySelectorAll(`.num-button`);
let display = document.querySelector(`.display`);
let text = ``;

buttons.forEach((button) =>{
    button.addEventListener("click", function() {
    text += button.textContent;
    display.textContent = text;        
    });
});

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