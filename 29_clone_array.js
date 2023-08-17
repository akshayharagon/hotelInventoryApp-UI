let array11 = ['item1', 'item2'];
let array22 =  ['item1', 'item2'];
console.log(array11===array22);

let n1 = 10;
let n2 = n1;

console.log(n2===n1)
console.log('-------------------------')

// === in primitives check only value and datatype 
// where as in reference types it will check value, data type and reference type


// cloning arrays => use slice() method
let array1 =['item1', 'item2'];
let array2 = array1.slice(0);
array1.push('item3');

console.log(array1===array2);
console.log(array1)
console.log(array2)
console.log('-----------------')

let array111 =['item1', 'item2'];
let array113 = [].concat(array111);
console.log(array111===array113);
console.log(array111)
console.log(array113)


// Spread Operator 
let myArray1 =['item1', 'item2'];
let myArray2 =[...myArray1];
myArray1.push('item3')
console.log(myArray1===myArray2);

console.log(myArray1)
console.log(myArray2)

let x = ['item1', 'item2'];
let y = x.slice(0).concat(['item3'])

console.log(x)
console.log(y)

let z = [].concat(x, ['itemZ'])
console.log(z)

let a =[...x, 'itemA', 'itemB']
console.log(a)

let b = [...x, ...y]
console.log(b)
