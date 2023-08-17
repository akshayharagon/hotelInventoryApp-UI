// find method  => returns value once matched(first occurance)
const myArray=['hello', 'hat','cat', 'dog', 'hi'];
const word =myArray.find((word)=>{
    return word.length===3;
})
console.log(word)