// Hoisting => In function declaration we can call function before initialization 
// whereas in function expression And Arrow function it's not possible


hello();

function hello(){
    console.log('hello')
}

// id we use variable before declaring using var, it will give undefined
// where as with let and const, it gives error