// super keyword
class Animal{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }

    eat(){
        return `${this.name} is eating`
    }

    isSuperCute(){
        return this.age<=1;
    }

    isCute(){
        return true;
    }
}

class Dog extends Animal {
    constructor(name, age, speed){
        super(name, age);
        this.speed=speed;
    }

    run(){
        return `${this.name} is running at ${this.speed} kmph`
    }

    eat(){
        return `Modified Eat : ${this.name} is eating`
    }
}

const doggy = new Dog('Doggy', 2, 45);
console.log(doggy)
console.log(doggy.eat());
console.log(doggy.isCute());
console.log(doggy.run());
console.log(doggy.eat());



