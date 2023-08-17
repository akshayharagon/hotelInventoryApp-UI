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

    static classInfo(){
        return 'this is class info';
    }

    static desc ='static property';

    eat(){
        return `${this.fName} is eating`
    }

    isSuperCute(){
        return this.age<=1;
    }

    isCute(){
        return true;
    }
}

const person = new Person('askshay', 'haragon', 66)
console.log(person.eat());
console.log(Person.classInfo())
console.log(Person.desc)
