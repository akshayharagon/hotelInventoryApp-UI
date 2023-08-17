// for in loop
// Object.keys

const person ={
    name:'akshay',
    age:'25',
    'my hobbies':['sleep', 'playing']
}

for( let key in person){
    console.log(person[key])
    console.log(`${key} :${person[key]}`)
    console.log(key, ':',person[key])

}

console.log(Object.keys(person))
// this returns an array of type Object isArray = true

for (let key of Object.keys(person)){
    console.log(person[key])
}
