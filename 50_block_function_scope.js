// block scope vs function scope

// let and const are block scope
// var is function scope

// considering whole file as a main function :
// => var is function scope which means var has global scope

{
    let name="akshay";
}
{
    var name="akshay";
}
console.log(name)

