// filter method
// callback function of filter accepts boolean => 
// here callback can be related to lambda expression in java stream api
const numbers = [4, 5, 3, 2, 4, 5];

const myArray = numbers.filter((number)=>{
    return number%2===0;
})

console.log(myArray)
