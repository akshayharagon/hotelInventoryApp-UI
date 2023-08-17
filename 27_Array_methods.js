// push, Pop
// shift, unshift


// Arrays are always mutable

let fruits =['apple', 'grapes', 'mango'];
// push - add at last

fruits.push('banana')
console.log(fruits);

//  pop- removes last and returns the removed item
let poppedFruit = fruits.pop();
console.log(fruits);
console.log(poppedFruit)

// unshift - adds item in the beginning
fruits.unshift('orange')
fruits.unshift('myFruit')
console.log(fruits)

// shift - removes item from beginning
console.log(fruits)
console.log(fruits.shift())


// push/pop are faster than shift/unshift
