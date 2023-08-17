let fruits =['apple', 'grpaes', 'banana'];
console.log(fruits.length)
console.log(fruits[0])
console.log(fruits[fruits.length-1])

let upperFruits =[];

for(let i=0; i<=fruits.length-1; i++){
    console.log(fruits[i].toUpperCase());
    upperFruits.push(fruits[i].toUpperCase())
}

console.log(upperFruits)
