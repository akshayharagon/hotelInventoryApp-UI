// Resolve or Reject after 2 secs

function myPromise(){
    return new Promise((resolve, reject)=>{
        const value = null;
        if(value){
            resolve();
        }
        else{
            reject();
        }
    })
}

myPromise().then(()=>{
    console.log('resolved')
}).catch(()=>{
    console.log('rejected')
})