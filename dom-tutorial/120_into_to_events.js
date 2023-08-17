// click, button press, mouse hover
// mdn event reference

// 1) adding onclick() event

// 2) applying object property of html element
const btn = document.querySelector('.btn-headline');
console.dir(btn)
btn.onclick = function(){
    console.log('you clicked me....')
}

// 3) addEventListener("event name", functionName)  ,, event name ex: click

// function clickMe(){
//     console.log('you clicked me second time...')
// }

// btn.addEventListener('click', clickMe);

btn.addEventListener('click', ()=>{
    console.log('you clicked me second time...');
})