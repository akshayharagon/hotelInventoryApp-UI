const myPromise = Promise.resolve(5);//returns resolved value
myPromise.then((value)=>{
    console.log(value)
})


// then() will always return Promise (irrespective of the value) by default it returns undefined

function myPromise2(){
    return new Promise((resolve, reject)=>{
        resolve('foo');
    })
}

myPromise2().then((value)=>{
    console.log(value);
    value+= 'bar';
    return value;
}).then((value)=>{
    console.log(value);
    value+='baaz';
    return value;
}).then(value=>{
    console.log(value)
})

