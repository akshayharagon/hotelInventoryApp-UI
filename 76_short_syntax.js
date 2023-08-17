const user1 ={
    name:'akshay',
    age:8,
    about(){
        console.log(this.name, this.age);
    }
}

user1.about();