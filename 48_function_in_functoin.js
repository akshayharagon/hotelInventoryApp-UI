const app =()=>{
    const myFunc =()=>{
        console.log('hello form myFunc')
    }
    console.log('inside app')
    const sum = (num1, num2)=>{
        return num1+num2;
    }
    const multi = (num1, num2)=>num1*num2;
    console.log(sum(1,1));
    console.log(multi(1,2));
    myFunc();
}
app();