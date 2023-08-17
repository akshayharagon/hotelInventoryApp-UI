// function : 1) creates object 2) add key value pair 3) returns object

const userMethods= {
    about:function () {
        return `${this.fName} is ${age} years old`
    },
    is18:function () {
        return this.age >= 18
    }
}

function createUser(fName, lName, email,age, address){
    const user ={};
    user.fName=fName;
    user.lName=lName;
    user.age=age;
    user.email=email;
    user.address=address;
    user.about= userMethods.about;
    user.is18=userMethods.is18;
    return user;
}

const user1 = createUser('sanket', 'haragon', 'akshay@gmail.com',28,'JKD');
console.log(user1);
console.log(user1.is18());

// here if we need to add few more methods
// then we need to add the reference of that method to our user object

// ==============================================================
const userMethod= {
    about:function () {
        return `${this.fName} is ${this.age} years old`
    },
    is18:function () {
        return this.age >= 18
    }
}

function createUsers(fName, lName, email,age, address){
    const user =Object.create(userMethod);
    user.fName=fName;
    user.lName=lName;
    user.age=age;
    user.email=email;
    user.address=address;
    return user;
}

const user2 = createUsers('anita', 'haragon', 'akshay@gmail.com',28,'JKD');
console.log(user2);
console.log(user2.about());
