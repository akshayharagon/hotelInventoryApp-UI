// setInterval
console.log('start')
// setInterval(()=>{
//     console.log(Math.random())
// }, 1000)
console.log('end')


const body = document.body;

// setInterval also gives id from browser
const button = document.querySelector('button');
const intervalId = setInterval(()=>{
    const r = Math.floor(Math.random() * 126);
    const g = Math.floor(Math.random() * 126);
    const b = Math.floor(Math.random() * 126);
    const rgb =`rgb(${r}, ${g}, ${b})`;
    body.style.background=rgb;
},1000);

button.addEventListener('click',()=>{
    clearInterval(intervalId);
    button.textContent = body.style.background;
})