// function can return function

// closures: if outerFUnc is returning innerFunc then it will return innerFunc 
// along with the variable of local memory of outerFunc 

function outerFunction(){
    function innerFunction(){
        console.log('hello world');
    }
    return innerFunction;
}
const ans = outerFunction();
console.log(ans);
ans();