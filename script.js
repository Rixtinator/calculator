// DOM 
const numberButton = document.querySelectorAll('.number'); //nodelist
const operatorButton = document.querySelectorAll('.operator'); //nodelist
const clearButton = document.querySelector('.clear');
const equalsButton = document.querySelector('.equals');
const currentOperand = document.querySelector('.current-operand');
const previousOperand = document.querySelector('.previous-operand');

let storedNumber = ' ';
currentOperand.textContent = ' ';
previousOperand.textContent = ' ';

numberButton.forEach(function (number) {
    number.addEventListener('click', function () {
        storedNumber += number.value
        currentOperand.textContent += number.value;
    });
});

operatorButton.forEach(function (operator) {
    operator.addEventListener('click', function () {
        firstNumber = storedNumber;
        console.log(firstNumber);
        currentOperand.textContent += operator.value;
    });
});

//if value is number > function for numbers
//if value is operator > function operator
//if value is clear > clear display etc
//if value is equal > show result

function operate(firstNumber, value, nextNumber) {
    if (value === "+") {
        console.log("+");
        return add(firstNumber, nextNumber);
    } else if (value === "-") {
        return subtract(firstNumber, nextNumber);
    } else if (value === "*") {
        return multiply(firstNumber, nextNumber);
    } else if (value === "/") {
        return divide(firstNumber, nextNumber);
    } else {
        return "oops";
    };
};

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
