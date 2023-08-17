// function expression hoisted?

// if we create function by using function expression then it will be 
// treated as varibale created in global memory having value undefined
// so if tried accessing before assigning gives undefined 

console.log(myFunction)

var myFunction = function(){
    console.log('this is my function');
}
