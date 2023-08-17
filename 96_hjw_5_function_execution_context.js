// FEC: one more execution context gets created while calling function
// similar to GEC
// in FEC arguements are assigned (as array like object) while local memory creation phase only
// unlike let & const will remail uninitialized

// 'arguments' in JS is a keyword which stores arguements as 
// array like object with some methods 


let foo ='foo';
console.log(foo);
function getFullName(fName, lName){
    console.log(arguments);
    let myVar = 'var inside func';
    const fullName =fName + ' ' + lName;
    return fullName;
}

const personName = getFullName('akshat', 'haragon');
console.log(personName)