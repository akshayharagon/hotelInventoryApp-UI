// Every method - it returns boolean, for all items matched
const numbers=[2,4,6,8];
const ans=numbers.every((number)=>{
    return number%2===0;
})

console.log(ans);

const products=[
    {id:1, name:'tv', price:1100},
    {id:2, name:'tv1', price:11200},
    {id:3, name:'tv2', price:100},
    {id:4, name:'tv3', price:11600},
    {id:5, name:'tv4', price:21440},
]

const result = products.every((product)=>product.price<12000);

console.log(result)