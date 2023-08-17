let numbers =[0,1,2]
//  for numbers ref we can access so many methods which are 
// present in its prototype
// JS create array as below fashion internally
let number = new Array(0,1,2);
console.log(Array.prototype); 
console.log(Object.getPrototypeOf(number))

// prototype of an array is array of obejcts only
// btw we can set the prototype of an function constructor to array as well


