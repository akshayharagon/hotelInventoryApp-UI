// understand callback

// passing  callbacks as 1) onSuccess  2) onError

function getTwoNumbersAndAdd(number1, number2, onSuccess, onError){
    if(typeof number1 === 'number' && typeof number2 === 'number' ){
    onSuccess(number1, number2);
    }
    else{
       onError();
    }
}

getTwoNumbersAndAdd(4,'5',(num1, num2)=>{
    console.log(num1+num2);
}, ()=>{
    console.log('wrong data')
});