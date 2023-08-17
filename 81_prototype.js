// JS function ====> function + object

function hello(){
    console.log('hello world')
}

console.log(hello.name);
// .name is a default property for function provided by JS
// we can add our own properties to a function

hello.myOwnProperty = 'Hi, this is custom property';
console.log(hello.myOwnProperty)

// so that we can treat function as object as well

// In JS function provides free space in the form of empty Object 
// and it is called as Prototype

// hello.prototype => object with hello constructor

// only functions will provide prototype propert

hello.prototype.abc='abc';
hello.prototype.sing=function(){
   return 'lsl sls ss';
}

console.log(hello.prototype)
console.log(hello.prototype.sing())

