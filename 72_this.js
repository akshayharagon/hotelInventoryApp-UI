// this keyword
// in JS window object is an global object 
// and it will show only while running in browser which is having lot of methods
// so this == window
console.log(this)

function myFunc(){
    console.log('hello world')
}
myFunc();

// whenever we declare functions in JS 
// they will get added into window object
// so
window.myFunc();

function myFunc1(){
// "use strict"
    console.log(this)
}
myFunc1();

// using strict mode can make this keyword not referring to window object


