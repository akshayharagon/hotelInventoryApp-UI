const myKey1 ="key1";
const myKey2 ="key2";

const myValue1 ='value1';
const myValue2 ='value2';

const obj ={
    myKey1:myValue1,
    myKey2:myValue2
}
console.log(obj)

const obj1 ={
    [myKey1]:myValue1,
    [myKey2]:myValue2
}
console.log(obj1)

const obj2={};
obj2[myKey1]=myValue1;
obj2[myKey2]=myValue2;

console.log(obj2);

