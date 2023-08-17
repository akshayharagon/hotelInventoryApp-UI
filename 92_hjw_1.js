// compilation
// code execution
// Global execution context & local execution context
 
// 1st step - compilation phase- for early error check and varibale scope determination
// compilation includes 1) tokeninzing/lexing 2)Parsing 3)code generation

// 2nd step - code execution phase -code executes in execution context
//  firstly global execution context gets created

// GEC - 1) creation phase 2) code execution phase

console.log(this);
console.log(window);
console.log(firstName);
var firstName = 'akshay';

// JS itself is an synchronous programming language
// asynchronous feature for JS is provided by browser
//  JS is single threaded - synchronous

