// Function Expression
// function singSong(){
//     console.log('singing song')
// }

// Actually we are assingning name to anonymous function

const singSong =function(){
    console.log('singing song')
}

singSong();

// function sum(num1, num2){
//     return num1+num2;
// }
// console.log(sum(2,3));

const sum = function(num1, num2){
    return num1+num2;
}
console.log(sum(2,3));

const findTarget = function (array, taregt){
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