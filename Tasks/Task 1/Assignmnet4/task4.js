"use strict";
function ToCreateFactorial(num) {
    let factorial = num;
    for (var i = 1; i < num; i++) {
        factorial *= i;
    }
    console.log(factorial);
}
ToCreateFactorial(5);
