// function returning Promise
function returnPromise(){
    const bucket =['coffee', 'chips', 'vegetable', 'salt', 'rice'];
    return new Promise((resolve, reject)=>{
    if(bucket.includes('salt') && bucket.includes('vegetable') && bucket.includes('rice')){
        resolve('here is ur fried rice')
    } else{
        reject('could not make fried rice')
    }
})
}


returnPromise().then((myFriedRice)=>{
    console.log('hi', myFriedRice)
}).catch((error)=>{console.log(error)})