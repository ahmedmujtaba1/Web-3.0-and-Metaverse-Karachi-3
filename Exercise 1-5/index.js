// Exercise 1 done
"use strict";
// Exercise 2 :
let name123 = "Ahmed Mujtaba";
console.log("Hello " + name123 + " ,would you like to learn some Python today?")
// Exercise 3:
// Printing name into lower case
let name_into_lowercase = name123.toLocaleLowerCase()
console.log("Printing name into lower case : " + name_into_lowercase)
// Printing name into UPPER case 
let name_into_uppercase = name123.toLocaleUpperCase()
console.log("Printing name into UPPER case : " + name_into_uppercase)
// Making a function named "titleCase"
function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    // Storing the result in var named "result"
    let result = str.join(' ');
    console.log("Printing name into Title Case : " + result)
}
// Calling the function
titleCase(name123);
// Exercise 4 :
console.log("Emily Dickinson once said, “That it will never come again is what makes life so sweet.”")
// Exercise 5:
let famous_person_name = "Sylvia Plath"
let message = famous_person_name + " once said, “Let me live, love, and say it well in good sentences.”"
console.log(message)
// Exercise 6:
