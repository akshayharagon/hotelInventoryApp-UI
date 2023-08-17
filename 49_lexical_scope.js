// In JS variable start accessing from local environment to its lexical environment
const myVar ='value1'
function myApp(){
    // const myVar ='value1'
    function myFunc(){
        // const myVar = 'value59'
        console.log('inside myFunc', myVar)
    }
    const myFunc1 = function(){}
    const myFunc2 =()=>{}
    console.log(myVar)
    myFunc();
}
myApp();