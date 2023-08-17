for(let i =0; i<10; i++){
console.log(i)
}
let j=0;
for(; j<10; j++){
    console.log('declaring variable before for loop',j)
    }

for(var i =0; i<10; i++){
    console.log(i)
}
console.log('var exits outside loop as well', i)