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

const animal1 = new Animal('tom', 2);
console.log(animal1);
console.log(animal1.eat());

console.log(animal1.isCute());
console.log(animal1.isSuperCute());

// Extending class
// dog class

class Dog extends Animal {

}

const doggy = new Dog('Doggy', 2);
console.log(doggy.eat());
console.log(doggy.isCute());



