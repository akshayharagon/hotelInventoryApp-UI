// writing 'async' infront of function makes furnction to return Promise

// so if we are returning promise inside a 'promise-function'(function with async keyword)
//  we can make the 'promise-function' to wait until the inside Promise to resolve/reject by using 
// 'await' keyword. This we are doing b'coz Promise is an asynchronous 
// so it won't wait for response or data to fecth completely


// for async promise catch block will not execute directly once getting error so we have to throw the 
// error explicitly
console.log('script start')
const URL ='https://jsonplaceholder.typicode.com/posts';

// async function getPosts(){
//     const response = await fetch(URL);
//     if(!response.ok){
//         throw new Error('something went wrong')
//     }
//     const data = response.json();
//     return data;
// }

const getPosts = async()=>{
    const response = await fetch(URL);
    if(!response.ok){
        throw new Error('something went wrong')
    }
    const data = response.json();
    return data;
}

getPosts().then(myData =>{
    console.log(myData)
})

console.log('End')