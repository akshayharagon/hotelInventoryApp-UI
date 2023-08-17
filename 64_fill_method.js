// fill method - modifies original array
// value, start, end - indices , fills in between start & end

// here we can fill the items in an array
const myArray = new Array(10).fill(-1);
console.log(myArray)

const myArray1 = [1,3,4,2,4,5];
myArray1.fill(0, 2, 5)
console.log(myArray1)