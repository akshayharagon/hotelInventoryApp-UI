const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

// event bubbling or propogation : event on ane element affects its parent element as well
// from bottom to top
child.addEventListener('click', ()=>{
    console.log('bubbled on child');
})

parent.addEventListener('click', ()=>{
    console.log('bubbled on parent');
})

grandparent.addEventListener('click', ()=>{
    console.log('bubbled on grandparent');
})

document.body.addEventListener('click', ()=>{
    console.log('bubbled on bocy');
})


// event capturing : 3rd argument as true considers as event captured
// from top to bottom
child.addEventListener('click', ()=>{
    console.log('captured!!!!! on child');
}, true)

parent.addEventListener('click', ()=>{
    console.log('captured!!!!! on parent');
}, true)

grandparent.addEventListener('click', ()=>{
    console.log('captured!!!!! on grandparent');
}, true)

document.body.addEventListener('click', ()=>{
    console.log('captured!!!!! on bocy');
}, true);


// event delegation
grandparent.addEventListener('click', (e)=>{
    console.log(e.target);
})