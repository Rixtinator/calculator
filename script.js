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

//Calculate functions
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

function clear() {
    storedNumber = '';
    firstNumber = '';
    clickedOperator = '';
    displaySum.textContent = '';
    displayResult.textContent = '';
    dot = false;
};

function calculate() {
    result = operate(parseFloat(firstNumber), parseFloat(storedNumber), clickedOperator);
    displayResult.textContent = Math.round(result * 1000000) / 1000000;
    storedNumber = Math.round(result * 1000000) / 1000000;
    dot = false;
};

function addOperator() {
    firstNumber = storedNumber;
    displaySum.textContent += clickedOperator;
    storedNumber = '';
    dot = false;
};

function del() {
    storedNumber = storedNumber.slice(0, -1);
    showDisplay();
};

// Button input
let dot = false;

function numberInput() {

}

numberButton.forEach(function (number) {
    number.addEventListener('click', () => {
        if (number.value === '.' && dot === false) {
            storedNumber += number.value;
            showDisplay();
            return dot = true;
        } else if (number.value === '.' && dot === true) {
            return;
        } else {
            storedNumber += number.value;
            showDisplay();
        };
    });
});

operatorButton.forEach(function (operator) {
    operator.addEventListener('click', () => {
        clickedOperator = operator.value;
        addOperator();
    });
});

equalsButton.addEventListener('click', () => {
    calculate();
});


clearButton.addEventListener('click', () => {
    clear();
});

deleteButton.addEventListener('click', () => {
    del();
});

//Keyboard input
window.addEventListener("keydown", (event) => {
    const key = event.key
    if (/[0-9.]/.test(key)) {
        if (key === '.' && dot === false) {
            storedNumber += key;
            showDisplay();
            return dot = true;
        } else if (key === '.' && dot === true) {
            return;
        } else {
            storedNumber += key;
            showDisplay();
        };
    };
    if (/[+,/,*,-]/.test(key)) {
        clickedOperator = key;
        addOperator();
        return;
    };
    if (/[=]/.test(key) || /[/r]/.test(key)) {
        calculate();
    };
    if (/^Backspace$/i.test(key)) {
        del();
    };
    if (/c$/.test(key) || /[C]/.test(key)) {
        clear();
    };
});
