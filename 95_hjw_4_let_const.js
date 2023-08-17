// let and const are hoisted?

// let const var are hoisted in global memory but undefined and uninitialized

// here variables with let and const are added as uninitialized in
// global memory
console.log(firstName);
let firstName ='akshay';
console.log(firstName);


// Temporal Dead Zone
// => as let and cost variable were uninitialized in gloable memory before
// initialization the time period is known as TDZ