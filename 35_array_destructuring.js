const myArray =['item1', 'item2', 'item3', 'item4'];
let [var1, , var2, ...myNewArray] = myArray
console.log(var1, var2 )
console.log(myNewArray)