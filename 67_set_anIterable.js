// Sets
// store data
// No index based access
// order is not guaranteed as no index based access
// unique items only
// can be stored values of any datatype
// cannot use length property

const numberSet = new Set([1,2,3,4,4, undefined]);
numberSet.add(1);
numberSet.add(3);
numberSet.add(['item1', 'item2']);
numberSet.add(['item1', 'item2']);
console.log(numberSet);

// has method
console.log(numberSet.has(1));
const myArray =[1,2,3,2,3,4,3,2,4,5];
const mySet = new Set(myArray);
console.log(mySet);

// 8.11