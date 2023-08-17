// proto, prototype, class

const user = {
    fName: 'akshay',
    lName: 'haragon',
    email: 'akshay@gmail.com',
    age: 23,
    address: "Jamkhandi",
    about: function () {
        return `${this.fName} is ${age} years old`
    },
    is18: function () {
        return this.age >= 18
    }
}

// function : 1) creates object 2) add key value pair 3) returns object
function createUser(fName, lName, email,age, address){
    const user ={};
    user.fName=fName;
    user.lName=lName;
    user.age=age;
    user.email=email;
    user.address=address;
    user.about=function () {
        return `${this.fName} is ${age} years old`
    };
    user.is18=  function () {
        return this.age >= 18
    }
    return user;
}

const user1 = createUser('akshay', 'haragon', 'akshay@gmail.com',28,'JKD');
console.log(user1);
console.log(user1.is18());