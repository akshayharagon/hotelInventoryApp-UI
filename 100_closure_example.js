function myFunc(power){
    return function(num){
        return num ** power;
    }
}

const ans= myFunc(3);
console.log(ans(2))


const myFunc = (power) => (num) => num ** power;