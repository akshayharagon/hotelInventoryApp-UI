// ASCII Table => 0 : 48 to 9 : 57, 
// 58 to 64 symbols, A:65 Z:90, 91 to 96 symbols, a:97 z:125

// forEach, filter, map were returning new array 
// sort will mutate the same array

// JS sorts the elements by considering them as string with ASCII code

const numbers=[1,2,34,5,32,2,444,5656,45,4,55,4];
// ["49", "50", "51", "53", "50", "52", "53" ....]
console.log(numbers.sort());

// as JS sorts the elements by considering string we can give callback to sort()
// if a-b => positive => reverse 
// if a-b => negative => as is
numbers.sort((a,b)=>{
    return a-b;
})
console.log(numbers)

const products=[
    {id:1, name:'tv', price:1100},
    {id:2, name:'tv1', price:11200},
    {id:3, name:'tv2', price:100},
    {id:4, name:'tv3', price:11600},
    {id:5, name:'tv4', price:11440},
]

products.sort((product1, product2)=>{
    return product1.price-product2.price;
})
console.log(products)

// As sort() will modify the object, if we want to retain the object same
// we can clone the object by using slice() method
