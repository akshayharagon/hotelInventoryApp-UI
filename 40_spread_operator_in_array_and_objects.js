const array1=[1,2,3];
const array2 = [4,5,6];

const newArray =[...array1, array2];
console.log(newArray);

const newArray1 =[...array1, ...array2]
console.log(newArray1)

const myArray =[..."abc"];
// here while spreading the value should be iterable like a string
console.log(myArray);

// spread operator in Object

const obj ={
    key1 :'value10',
    key2 :'value2',
    key1 :'value11'
}
console.log(obj)

const obj1 ={
    key3:'value3',
    key4:'value4',
    key1:'value1'
}
// always there will be unique keys in object 
// if we add multiple keys thn it will be overriden with recent key-value
const newObj ={...obj, ...obj1, key5:'value5'}
console.log(newObj)

const newObj1 ={..."abc"}
console.log(newObj1)
const newObj2={...['item1', 'item2']}
console.log(newObj2)
