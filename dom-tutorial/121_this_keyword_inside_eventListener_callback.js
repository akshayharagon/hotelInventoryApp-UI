
const btn = document.querySelector('.btn-headline');
btn.addEventListener('click', function(){
    console.log('you clicked me second time...');
    console.log('value of this');
    console.log(this)
})
// in fuction declaration this represents html reference
btn.addEventListener('click', ()=>{
    console.log('you clicked me second time...');
    console.log('value of this');
    console.log(this)
})
// in arrow function this represents window object (it will take 'this' form one level up)