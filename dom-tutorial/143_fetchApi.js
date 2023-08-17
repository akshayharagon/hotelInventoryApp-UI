const URL ='https://jsonplaceholder.typicode.com/posts';

// fetch(URL) = >returns Promise
// respone.json() => returns Promise
fetch(URL).then(respone=>{
    if(respone.ok){
        return respone.json();
    }else{
        throw new Error('something went wrong');
    }
})
.then(data=>{
    console.log(data)
})
.catch(error=>{
    console.log(error)
});
