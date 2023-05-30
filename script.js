const numberButton = document.querySelectorAll('.number'); //nodelist
const operatorButton = document.querySelectorAll('.operator'); //nodelist
const clearButton = document.querySelector('.clear');
const equalsButton = document.querySelector('.equals');
const currentOperand = document.querySelector('.current-operand');
const previousOperand = document.querySelector('.previous-operand');

let storedNumber = '';
let firstNumber = '';
let nextNumber = '';
let result = '';
currentOperand.textContent = '';
previousOperand.textContent = '';

numberButton.forEach(function (number) {
    number.addEventListener('click', function () {
        storedNumber += number.value;
        previousOperand.textContent = storedNumber;
    });
});

operatorButton.forEach(function (operator) {
    operator.addEventListener('click', function () {
        firstNumber = storedNumber;
        clickedOperator = operator.value;
        previousOperand.textContent += clickedOperator;
        storedNumber = '';
        currentOperand.textContent = storedNumber;
    });
});

equalsButton.addEventListener('click', function () {
    result = operate(parseFloat(firstNumber), parseFloat(storedNumber), clickedOperator);
    currentOperand.textContent = result;
    console.log(result);
});

function add(firstNumber, nextNumber) {
    return firstNumber + nextNumber;
};

function subtract(firstNumber, nextNumber) {
    return result = firstNumber - nextNumber;
};

function multiply(firstNumber, nextNumber) {
    return result = firstNumber * nextNumber;
};

function divide(firstNumber, nextNumber) {
    return result = firstNumber / nextNumber;
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
