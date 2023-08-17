// generating random color from Math.random()

// Math.floor(Math.random() * n) => will generate random number between 0 to n

const mainButton = document.querySelector('button');
const body = document.body;
const currentColor = document.querySelector('.currnet-color');

function randomColorGenerator(){
    const red = Math.floor(Math.random() *256);
    const green = Math.floor(Math.random() *256);
    const blue = Math.floor(Math.random() *256);
    const randomColor = `rgb(${red}, ${green}, ${blue})`
    return randomColor;
}

mainButton.addEventListener('click', ()=>{
    const randomColor = randomColorGenerator();
    body.style.backgroundColor= randomColor;
    currentColor.textContent=randomColor;
})
