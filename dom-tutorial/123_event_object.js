// while working with events using addEventListener() browser will give 'event object' based on event name passed

const allButtons = document.querySelectorAll('.my-buttons button')
for(let button of allButtons){
    button.addEventListener('click', (e)=>{
        console.log(e.target);
        console.log(e.currentTarget);
    })
}