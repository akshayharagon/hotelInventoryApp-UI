const allbtns = document.querySelectorAll('button');

allbtns.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        // console.log(`you clicked button no: ${btn.getAttribute('id')}`);
        console.log(`you clicked button no: ${btn.id}`);
        console.log(btn.textContent);

    })
})
