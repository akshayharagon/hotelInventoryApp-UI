// Arrow Functions
const singSong =() => {
    console.log('singing song')
}


singSong();

const sum = (num1, num2)=>{
    return num1+num2;
}
console.log(sum(2,3));

const findTarget =  (array, taregt) =>{
    for(let i=0; i<array.length; i++){
        if(array[i]===taregt){
            return i;
        }
    }
    return -1;
}

const myArray =[1,2,6,7,8,9]
const ans =findTarget(myArray, 3);  
console.log(ans);


const isEven = (num) =>{
    return num % 2 ===0;
}
console.log(isEven(4))

// if only one paramenter is to be passed then no need to use paranthesis
// AND return keyword can be skipped as below example if function returning value within one line

const isEven1 = num => num % 2 === 0;
console.log(isEven1(4))