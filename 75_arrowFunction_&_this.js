// arrow functions with this keyword

// arrow functions do not contain its own this keyword
// if we use this kw in arrow functions it will refer to window object 
// not even by using call(), apply(), bind()

const user1 ={
    name:'akshay',
    age:8,
    about:()=>{
        console.log(this.name, this.age);
    }
}

user1.about();