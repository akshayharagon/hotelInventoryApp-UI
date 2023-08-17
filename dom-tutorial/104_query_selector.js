// select element using query selector 

// const mainHeading = document.getElementById('main-heading');
const mainHeading = document.querySelector('#main-heading');
const header = document.querySelector('.header');
console.log(header)

// id must be unique in html elements whereas class can be multiple

const navItem = document.querySelector('.nav-item');
console.log(navItem);

// here nav-item class has been used for multiple elements but while using query selector 
// it will return first class only

const navItemAll = document.querySelectorAll('.nav-item');
console.log(navItemAll);

// return node list of elements with given class