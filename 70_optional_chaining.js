// Optional chaining

const user ={
    firstName :'aksay',
    // address:{houseNumber:1234}
}

console.log(user['firstName'])
// console.log(user.address.houseNumber)

// here we are trying to access houseNumber property on undefined address
// so to avoid error we can restrict the code to give undefined for both
// so in future those undefined fields can get assigned
//  using "?." optional
const user1 ={
    firstName :'aksay',
    // address:{houseNumber:1234}
}

console.log(user1?.firstName);
console.log(user1?.address?.houseNumber)
