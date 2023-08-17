// Function Declaration

function singSong(){
    console.log('singing song')
    return 4;
}

const value=singSong();
console.log(value)

function sum(num1, num2){
    return num1+num2;
}
console.log(undefined+4)
console.log(sum(2,3));
console.log(sum());
// ?prints Not a Number => undefined + undefines = NaN & any number + undefined = NaN



function isEven(num){
    return num % 2 ===0;
}

console.log(isEven(4))

function findTarget(array, taregt){
    for(let i=0; i<array.length; i++){
        if(array[i]===taregt){
            return i;
        }
    }
    return -1;
}

const myArray =[1,2,6,7,8,9]
const ans =findTarget(myArray, 3);  
console.log(ans)