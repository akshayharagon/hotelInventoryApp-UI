// Maps
// Map is an iterable

// store data in ordered fashion
// in objects order is not maintained
// stores data in key-value pair
// duplicate keys are not allowed like objects

// objects can only have string or symbol as key
// in maps we can use anything as key like array, number and string
 
const person = new Map();
person.set('name', 'akshay')
person.set('age', 26)
person.set(1, 'one')
console.log(person)
console.log(person.get(1))

for (let key of person.keys()){
    console.log(key, typeof key)
}

// for objects we can use for in not for of

// while iterating map it gives each key-value in an array,, 
// so we can destructure the array and use key and value separately

// for (let key of person){
//     console.log(key)
// }

for (let [key, value] of person){
    console.log(key, value)
}

// one more way to create map

const student = new Map([['name', 'akshay'], ['age', 25]])
console.log(student)

// Storing object as a key in map 
const person1 ={
    id:1,
    fName:'akshay'
}

const extraInfo = new Map();
extraInfo.set(person1, {age:25, gender:'male'})
console.log(extraInfo);
console.log(person1.id);
console.log(extraInfo.get(person1).age)


