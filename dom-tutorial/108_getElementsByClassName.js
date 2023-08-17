// get multiple elements by class name

const navItems = document.getElementsByClassName('nav-item');
console.log(navItems) //returns HTMLCollection : array like object not an array(can be indexed but not array methods)

const navItems1 = document.querySelectorAll('nav-item');
console.log(navItems1) //returns node list :array like object not an array
