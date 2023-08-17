// getter and setter

// while using getter then function has to be treated as property only
class Person{
    constructor(fName, lName,age){
        this.fName=fName;
        this.lName=lName;
        this.age=age;
    }

    get fullName(){
        return `${this.fName} ${this.lName}`
    }

    set fullName(fullName){
       const [fName, lName] = fullName.split(' ');
        this.fName=fName;
        this.lName=lName;
    }
}

const person = new Person('akshay', 'haragon', 25);
console.log(person);
console.log(person.fullName);
person.fullName='anita patil'
// person.setName('sanket', 'haragon');

console.log(person)
