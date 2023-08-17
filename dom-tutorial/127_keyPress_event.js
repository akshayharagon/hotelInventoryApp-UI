// keypress event
const body = document.body;
body.addEventListener('keypress', (e)=>{
    console.log(e.key)
})

// mousehover event
const mainButton = document.querySelector('.btn-headline');
mainButton.addEventListener('mouseover', ()=>{
    console.log('mouseover occured')
})

mainButton.addEventListener('mouseleave', ()=>{
    console.log('mouseleave occured')
})