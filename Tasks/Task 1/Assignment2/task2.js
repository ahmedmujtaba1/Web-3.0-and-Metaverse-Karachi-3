"use strict";
let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
// Append a string to the end of the array
fruits.push("kiwi");
console.log(fruits);
// Prepend a string to the beginning of the array
let fruit2 = ["apple", "banana", "cherry", "date", "elderberry"];
fruit2.shift();
console.log(fruit2);
// Remove a string from a specific index in the array and replace it with another string
let fruit3 = ["apple", "banana", "cherry", "date", "elderberry"];
fruit3.splice(2, 1, "mango");
console.log(fruit3);
