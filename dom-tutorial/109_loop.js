

const navItems = document.getElementsByClassName('nav-item');
//  here we cannot use forEach loop with HTMLCollection to iterate

let anchors = document.getElementsByTagName('a');


// for(let i =0; i<anchors.length; i++){
//     console.log(anchors[i]);
//     anchors[i].style.backgroundColor ='#fff';
//     anchors[i].style.color ='green';
//     anchors[i].style.fontWeight ='bold';
// }

// for(let anchor of anchors){
//     anchor.style.backgroundColor ='#fff';
//     anchor.style.color ='green';
//     anchor.style.fontWeight ='bold';
// }

// HTMLCollection can be converted to Array and then we can use forEach method

anchors = Array.from(anchors);

anchors.forEach((anchor)=>{
    anchor.style.backgroundColor ='#fff';
    anchor.style.color ='green';
    anchor.style.fontWeight ='bold';
})


let anchors2 = document.querySelectorAll('a');
anchors2.forEach((anchor)=>{
    console.log(anchor.getAttribute('href'))
    anchor.style.backgroundColor ='#fff';
    anchor.style.color ='green';
    anchor.style.fontWeight ='bold';
})
