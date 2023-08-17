// class keyword
// in JS classes are fake

class CreateUsers {
    constructor(fName, lName, email,age, address){
        this.fName=fName;
        this.lName=lName;
        this.age=age;
        this.email=email;
        this.address=address;
    }
         about () {
            return `${this.fName} is ${this.age} years old`
        }

        is18 () {
            return this.age >= 18
        }
}

// function CreateUsers(fName, lName, email,age, address){
//     this.fName=fName;
//     this.lName=lName;
//     this.age=age;
//     this.email=email;
//     this.address=address;
// }

// CreateUsers.prototype.about = function () {
//     return `${this.fName} is ${this.age} years old`
// }
// CreateUsers.prototype.is18 =function () {
//     return this.age >= 18
// }

const user2 = new CreateUsers('anita', 'haragon', 'akshay@gmail.com',28,'JKD');
const user3 = new CreateUsers('sanket', 'haragon', 'akshay@gmail.com',28,'JKD');
const user4 = new CreateUsers('akshay', 'haragon', 'akshay@gmail.com',8,'JKD');

console.log(user4.is18())