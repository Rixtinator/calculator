const numberButton = document.querySelectorAll('.number'); //nodelist
const operatorButton = document.querySelectorAll('.operator'); //nodelist
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.del');
const equalsButton = document.querySelector('.equals');
const displaySum = document.querySelector('.display-sum');
const displayResult = document.querySelector('.display-result');

let storedNumber = '';
let firstNumber = '';
let nextNumber = '';
let result = '';
let clickedOperator = '';
displaySum.textContent = '';
displayResult.textContent = '';

function showDisplay() {
    if (clickedOperator === '') {
        displaySum.textContent = storedNumber;
    } else { displaySum.textContent = firstNumber + clickedOperator + storedNumber };
};

numberButton.forEach(function (number) {
    number.addEventListener('click', () => {
        storedNumber += number.value;
        showDisplay();
    });
});

operatorButton.forEach(function (operator) {
    operator.addEventListener('click', () => {
        firstNumber = storedNumber;
        clickedOperator = operator.value;
        displaySum.textContent += clickedOperator;
        storedNumber = '';
    });
});

equalsButton.addEventListener('click', () => {
    result = operate(parseFloat(firstNumber), parseFloat(storedNumber), clickedOperator);
    displayResult.textContent = Math.round(result * 1000000) / 1000000;
    storedNumber = result;
});

clearButton.addEventListener('click', () => {
    storedNumber = '';
    firstNumber = '';
    clickedOperator = '';
    displaySum.textContent = '';
    displayResult.textContent = '';
})

deleteButton.addEventListener('click', () => {
    storedNumber = storedNumber.slice(0, -1);
    showDisplay();
});

function add(firstNumber, nextNumber) {
    return firstNumber + nextNumber;
};

function subtract(firstNumber, nextNumber) {
    return firstNumber - nextNumber;
};

function multiply(firstNumber, nextNumber) {
    return firstNumber * nextNumber;
};

function divide(firstNumber, nextNumber) {
    return firstNumber / nextNumber;
};

function operate(firstNumber, nextNumber, clickedOperator) {
    switch (clickedOperator) {
        case "+":
            return add(firstNumber, nextNumber);
        case "-":
            return subtract(firstNumber, nextNumber);
        case "*":
            return multiply(firstNumber, nextNumber);
        case "/":
            return divide(firstNumber, nextNumber);
    };
};
