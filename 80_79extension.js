
const obj1 = {
    key1:'value1',
    key2:'value2'
}

const obj2 = {
    key3:'value3'
}
console.log(obj2.key1);
//  while getting key1 from obj1 through obj2 we got undefined

// one more way to create object =>
const obj3 = Object.create(obj1);
obj3.key3='value3';
console.log(obj3.key1)

// it will create empty object with __proto__ chain

// by this way value of key1 of obj1 can be accessed through obj3
// so firstly it will try to access property of its own object if not found
//  it will go to ref object provided in Object.create()

console.log(obj3)
// this will give obj3 and a [[prototype]] of obj1(obj ref of Object.create())

// i.e, if JS cannot find field in an object it will try finding in that obj's [[prototype]]
// [[prototype]] itself is an Object, ref provided using Object.create()
// __proto__ = [[prototype]] , in echmascript documentation

console.log(obj3.__proto__);


