function myFunc(){
    function hello(){
        return "hello world";
    }
    return hello;
}

const ans =myFunc();
const value = ans();

// Higher order Function => function in which we r 
// performing callback, fuction returning function or both 