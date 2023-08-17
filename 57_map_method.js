// map always returns array of mapped thing
const numbers = [4, 5, 3, 2, 4, 5];
const squaredNumber = numbers.map((number, index)=>{
    return number*number + index;
})
console.log(squaredNumber)