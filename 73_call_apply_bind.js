// call(), apply(), bind() methods

function myFunc(){
    console.log('hello world')
}

myFunc.call();

const user1={
    firstName:'akshay',
    age:22,
    about:function(hobby, musician){
        console.log(this.firstName, this.age, hobby, musician)
    }
}

const user2={
    firstName:'akshay',
    age:2,
}

// here we need to use about field of user1 to user2

user1.about.call(user2, 'guitar', 'mozart');
// while applying call() to objects we need to pass 
// the reference which will considered as this

function about(hobby, musician){
    console.log(this.firstName, this.age, hobby, musician)
}

const user3={
    firstName:'akshay',
    age:22,
}

const user4={
    firstName:'akshay',
    age:2,
}

about.call(user3, 'guitar', 'mozart');
about.call(user4, 'guitar', 'mozart');


// apply() => here we will pass the arguements in an array
function about1(hobby, musician){
    console.log(this.firstName, this.age, hobby, musician)
}

const user5={
    firstName:'akshay',
    age:22,
}

const user6={
    firstName:'akshay',
    age:2,
}

about1.apply(user6, ['guitar', 'mozart1']);

// bind() => will return a function which will work same as call and apply 
// where in which we can use that returned function in future

const func = about1.bind(user5,'guitar', 'shajsjkask');
func();


