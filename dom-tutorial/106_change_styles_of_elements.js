// change the style of elements
// h2 element inside div element of class headline
const mainHeading = document.querySelector('div.headline h2');
console.log(mainHeading)
console.log(mainHeading.style) // returns all applicable style fields
mainHeading.style.color = 'blue'
mainHeading.style.backgroundColor = 'black'
mainHeading.style.border='20px solid green'

// follows camel case convention for properties as applying css attributes gives error in Js
