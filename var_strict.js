"use strict"
var firstName ="Akshay";
console.log(firstName);
// variables can have the same name if declared with the var keyword 
// (this is why it is recommended to use let )
var firstName="Haragon";
console.log(firstName);

// Variables can be declared and initialized without the var or let keywords. 
// However, a value must be assigned to a variable declared without the var keyword. 
// The variables declared without the var keyword become global variables, irrespective of where they are declared.

name ="akshay";
console.log(name);

// "use Strict"
// It enforces stricter parsing and error handling on the code at runtime.
// It also helps you write cleaner code and catch errors and bugs that might otherwise go unnoticed.