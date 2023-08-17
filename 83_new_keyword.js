// new keyword

// 1) creates empty object can be treated as this kw
// 2) returnd this(empty object)
// 3) help in proto chaining on behalf of Object.create()

function createUser(fName, age){
    this.fName= fName;
    this.age= age;
}

createUser.prototype.about = function(){
    console.log(this.fName, this.age)
}

const user = new createUser('akshay', 23);

user.about();

// =================================

//here it is called as constructor function
//  just like constructor in Java 

// function constructor name should start with capital letter as per convention

function CreateUsers(fName, lName, email,age, address){
    this.fName=fName;
    this.lName=lName;
    this.age=age;
    this.email=email;
    this.address=address;
}

CreateUsers.prototype.about = function () {
    return `${this.fName} is ${this.age} years old`
}
CreateUsers.prototype.is18 =function () {
    return this.age >= 18
}

const user2 = new CreateUsers('anita', 'haragon', 'akshay@gmail.com',28,'JKD');
const user3 = new CreateUsers('sanket', 'haragon', 'akshay@gmail.com',28,'JKD');
const user4 = new CreateUsers('akshay', 'haragon', 'akshay@gmail.com',8,'JKD');

console.log(user4);
console.log(user4.about());