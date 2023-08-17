// Promise - it's also a browser feature so it will execute after completing JS code
// but Promises will store in multitask queue just like callback queue after processing in browser
// and after that eventloop will take care of the promise in multitask queue
// eventLoop gives first priority to multitask queue

// old name was something with future
//  Promise represents future value that we don't know as of now but will get to know afterwards
// we can give anthing in resolve and reject 

console.log('start')
// producing Promise
const bucket =['coffee', 'chips', 'vegetable', 'rice'];
const friedRicePromise = new Promise((resolve, reject)=>{
    if(bucket.includes('salt') && bucket.includes('vegetable') && bucket.includes('rice')){
        resolve('here is ur fried rice')
    }
    else{
        reject('could not make fried rice')
        // reject(new Error('something missing from bucket'))
    }
})


// Consuming Promise
// Promise.then() takes resolve and reject as 2 callbacks 
friedRicePromise.then((myFriedRice)=>{
    console.log('hi', myFriedRice)
}, (error)=>{
    console.log(error)
})

// one more way to handle promise
friedRicePromise.then((myFriedRice)=>{
    console.log('hi', myFriedRice)
}).catch((error)=>{console.log(error)})


setTimeout(()=>{
    console.log('from setTimeout')
}, 0)

console.log('end')


