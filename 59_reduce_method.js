const numbers = [4, 5, 3, 2, 4, 5];
const sum = numbers.reduce((accumulator, currentValue)=>{
    return accumulator*currentValue;
})

console.log(sum)

// here reduce can take one nore arguement as initial value for accumulator
// here accumulator's value converted to returning value for every iteration

const value = numbers.reduce((accumulator, currentValue)=>{
    return accumulator*currentValue;
}, 100);
console.log(value)
console.log('==================')

const products=[{id:1, name:'tv', price:10000},
{id:2, name:'washing machine', price:120000},
{id:3, name:'fridge', price:130000}]

const totalAmount = products.reduce((totalAmt, eachProduct)=>{
    return totalAmt + eachProduct.price;
}, 0)
console.log(totalAmount)
