// hoisting in detail understanding

// here variables with var and function with function declaration type 
// in code execution phase variables and functions are get stored in gloabal memory
// so we can access those before declaration

console.log(this);
console.log(window);
console.log(myFunction);
console.log(fullName)

function myFunction(){
    console.log('this is my function');
}

var firstName ='akshsy';
var lastName ='haragon';
var fullName = firstName + ' ' + lastName;
console.log(fullName);