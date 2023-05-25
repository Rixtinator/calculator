let firstNumber;
let operator;
let nextNumber;

// Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
function operate(firstNumber, operator, nextNumber) {
    if (operator === "+") {
        return add(firstNumber, nextNumber);
    } else if (operator === "-") {
        return subtract(firstNumber, nextNumber);
    } else if (operator === "*") {
        return multiply(firstNumber, nextNumber);
    } else if (operator === "/") {
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
