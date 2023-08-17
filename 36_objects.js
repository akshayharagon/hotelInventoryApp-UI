// objects won't have index so use keys
// refernce types
// object literal
// by default keys will be in string
// we can write keys in quotes as well in object
const person ={
    name:'akshay',
    age:'25',
    hobbies:['sleep', 'playing']
}

console.log(person)
console.log(person.age)
console.log(person['name'])

// adding properties to an Object

person.gender = 'male'
person['city']= 'bangalore'
console.log(person)
