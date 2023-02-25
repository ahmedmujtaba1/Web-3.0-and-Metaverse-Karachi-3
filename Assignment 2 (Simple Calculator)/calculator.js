"use strict";
function calculator(number1, operator, number2) {
    if (operator == "+") {
        let result = number1 + number2;
        console.log(`${number1} ${operator} ${number2} = ${result}`);
    }
    else if (operator == "-") {
        let result = number1 - number2;
        console.log(`${number1} ${operator} ${number2} = ${result}`);
    }
    else if (operator == "x") {
        let result = number1 * number2;
        console.log(`${number1} ${operator} ${number2} = ${result}`);
    }
    else if (operator == "/") {
        let result = number1 / number2;
        console.log(`${number1} ${operator} ${number2} = ${result}`);
    }
}
calculator(10, "+", 10);
calculator(10, "-", 10);
calculator(10, "x", 10);
calculator(40, "/", 2);
