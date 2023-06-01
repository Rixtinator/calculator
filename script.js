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
});

deleteButton.addEventListener('click', () => {
    storedNumber = storedNumber.slice(0, -1);
    showDisplay();
});

window.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "0":
            storedNumber += 0;
            showDisplay();
            break;
        case "1":
            storedNumber += 1;
            showDisplay();
            break;
        case "2":
            storedNumber += 2;
            showDisplay();
            break;
        case "3":
            storedNumber += 3;
            showDisplay();
            break;
        case "4":
            storedNumber += 4;
            showDisplay();
            break;
        case "5":
            storedNumber += 5;
            showDisplay();
            break;
        case "6":
            storedNumber += 6;
            showDisplay();
            break;
        case "7":
            storedNumber += 7;
            showDisplay();
            break;
        case "8":
            storedNumber += 8;
            showDisplay();
            break;
        case "9":
            storedNumber += 9;
            showDisplay();
            break;
        case ".":
            storedNumber += ".";
            showDisplay();
            break;
        case "/":
            firstNumber = storedNumber;
            clickedOperator = "/";
            displaySum.textContent += clickedOperator;
            storedNumber = '';
            break;
        case "*":
            firstNumber = storedNumber;
            clickedOperator = "*";
            displaySum.textContent += clickedOperator;
            storedNumber = '';
            break;
        case "-":
            firstNumber = storedNumber;
            clickedOperator = "-";
            displaySum.textContent += clickedOperator;
            storedNumber = '';
            break;
        case "+":
            firstNumber = storedNumber;
            clickedOperator = "+";
            displaySum.textContent += clickedOperator;
            storedNumber = '';
            break;
        case "Enter":
            result = operate(parseFloat(firstNumber), parseFloat(storedNumber), clickedOperator);
            displayResult.textContent = Math.round(result * 1000000) / 1000000;
            storedNumber = result;
            break;
        case "=":
            result = operate(parseFloat(firstNumber), parseFloat(storedNumber), clickedOperator);
            displayResult.textContent = Math.round(result * 1000000) / 1000000;
            storedNumber = result;
            break;
        case "Backspace":
            storedNumber = storedNumber.slice(0, -1);
            showDisplay();
            break;
        case "c":
            storedNumber = '';
            firstNumber = '';
            clickedOperator = '';
            displaySum.textContent = '';
            displayResult.textContent = '';
        default:
            return;
    };
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
