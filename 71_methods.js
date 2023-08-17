// methods
// functions inside object
// this keyword

const person ={
    name:'skahy',
    age:25,
    about:function(){
        // console.log(`person name is ${person.name} and ${person.age}`)
        console.log(`person name is ${this.name} and ${this.age}`)
    }
}
// we cannot access properties of object inside method directly 
// we have to use current object reference called this keyword

person.about();

// here about() method is getting called to person reference
// so using this keyword we can refer to current object ref i.e, person

function personInfo(){
    console.log(`person name is ${this.name} and ${this.age}`)
}
const person1 ={
    name:'skahy',
    age:25,
    about:personInfo
}
const person2 ={
    name:'sanket',
    age:22,
    about:personInfo
}
person1.about();
person2.about();
