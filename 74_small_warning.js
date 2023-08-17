const user1 ={
    name:'akshay',
    age:8,
    about:function(){
        console.log(this.name, this.age);
    }
}

// don't do this

// const myFunc = user1.about;
// myFunc();

const myFunc = user1.about.bind(user1);
myFunc();