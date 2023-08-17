let firstName;
console.log(firstName, typeof firstName)

// variables can be unassigned for let and var but not for const

// typeof null is object, although object itself is a datatype so it's a bug in JS
//  and it's not been fixed as lot of applications already implemented this
let name = null;
console.log(typeof name)

console.log(Number.MAX_SAFE_INTEGER);
let bigNumber1 = 11111111111111111111111111111111111111111222222222222222222222222222;
let bigNumber = BigInt(11111111111111111111111111111111111111111222222222222222222222222222);
let altBigNumber = 1111111111111111111111111111111111111111111111111111111111111111n;
console.log(typeof bigNumber, typeof bigNumber1, typeof altBigNumber)
console.log(222n + 222n)

// cannot perform any action for variables of 2 diff dataypes  