for(let i =0; i<5; i++){
    if(i===3){
        break;
    }
    console.log(i)
}

console.log('broke')

for(let i =0; i<5; i++){
    if(i===3){
        continue;
    }
    console.log(i)
}

console.log('continued by skipping that number')