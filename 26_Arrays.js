// intro to array
// arrays are reference type => means arrays are considered to be object unlike primitive variables

// ordered collection of items => indexed elements
let fruits =['apple', 'banaana', 'mango'];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[2]);

let numArray = [1,2,3,4,5];

let mixedArray =[1,"akshay", null, undefined, 1.9];
console.log(mixedArray)

fruits[1]= 'grapes'

console.log(fruits)
console.log(typeof fruits)

console.log(Array.isArray(fruits))

let obj ={};
console.log(Array.isArray(obj))

