// instead of creating proto here we can go with prototype
// here also we need to use Object.create but instead of other obj ref
//  we have to pass own function protorype

// const userMethod= {
//     about:function () {
//         return `${this.fName} is ${this.age} years old`
//     },
//     is18:function () {
//         return this.age >= 18
//     }
// }

function createUsers(fName, lName, email,age, address){
    // const user =Object.create(userMethod);
    const user =Object.create(createUsers.prototype);
    user.fName=fName;
    user.lName=lName;
    user.age=age;
    user.email=email;
    user.address=address;
    return user;
}

createUsers.prototype.about = function () {
    return `${this.fName} is ${this.age} years old`
}
createUsers.prototype.is18 =function () {
    return this.age >= 18
}

const user2 = createUsers('anita', 'haragon', 'akshay@gmail.com',28,'JKD');
console.log(user2);
console.log(user2.about());