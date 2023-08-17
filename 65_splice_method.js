// splice method 
// start , delete, insert => need to maintain the order as parameter in splice()
// modifies the existing array

const myArray =['item1', 'item2', 'item3'];

// delete - returns deleted items in an array
console.log(myArray.splice(1,1));

// insert
myArray.splice(1,0,'inserted item')
console.log(myArray)

const myArray1 =['item1', 'item2', 'item3'];
// insert and delete
const popped = myArray1.splice(0,2,"new item");
console.log(myArray1);
console.log('popped', popped)


