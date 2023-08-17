// primitive types
// String, Number


let n1 = 'akshay'
let n2 = n1;
n2= n1+'a'
console.log(n2)
console.log(n1)

// reference types
// arrays
let array1 = ['item1', 'itme2']
let array2 = array1;
console.log(array1)
console.log(array2)
array1.push('item3')
console.log(array1)
console.log(array2)

// ----------------------

// in primitives only value will be assigned with diff memory => Stack memory only

// for reference types values will be stored in heap memory 
// and the address will be stored in stack memory called pointer. 
// In stack diff pointers will be created with shared address same as value



