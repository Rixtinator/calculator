const numberButton = document.querySelectorAll('.number'); //nodelist
const operatorButton = document.querySelectorAll('.operator'); //nodelist
const clearButton = document.querySelector('.clear');
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

numberButton.forEach(function (number) {
    number.addEventListener('click', function () {
        storedNumber += number.value;
        if (clickedOperator === '') {
            displaySum.textContent = storedNumber;
        } else { displaySum.textContent = firstNumber + clickedOperator + storedNumber };
    });
});

operatorButton.forEach(function (operator) {
    operator.addEventListener('click', function () {
        firstNumber = storedNumber;
        clickedOperator = operator.value;
        displaySum.textContent += clickedOperator;
        storedNumber = '';
    });
});

equalsButton.addEventListener('click', function () {
    result = operate(parseFloat(firstNumber), parseFloat(storedNumber), clickedOperator);
    displayResult.textContent = result;
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
