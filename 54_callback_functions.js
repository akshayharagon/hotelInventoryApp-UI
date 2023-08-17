//Callback Function : sending function 1(function name) as an arguement to 
// an another function 2 and calling function 1
// usually the parameter we r passing here is called as callback

// learn more in asynchronous programming

function myFunc2(name){
    console.log("inside my Func 2");
    console.log(name)
}

function myFunc(callback){
    callback('akshay');
}

myFunc(myFunc2)