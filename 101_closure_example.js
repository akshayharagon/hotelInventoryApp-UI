// tracking a function how many times it has been called

function func(){
    let x= true;
    return function(){
        if(x){
            console.log('hi u called me');
        }
        else{
            console.log('u already called me')
        }
        x= false
    }
}

const ans = func();
ans();
ans();
ans();

const ans1 = func();
ans1();
ans1();


// creating directory command : mkdir 'name'