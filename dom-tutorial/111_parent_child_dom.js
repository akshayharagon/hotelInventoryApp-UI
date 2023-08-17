console.log('hi')


/* 
DOM tree

Document => root node
html => root element 
html    1) head
        2) NS
        3) body

head
1) new line => '\n ' => text node
2) title : text inside title is also text node
3) new line - NS 
4) script 
5) NS

body
1) NS
2) div 
3) NS

div
1) NS
2) h1 - text node
3) NS
4) p - text node

broser has ignored NS after opening html and befor closing hym tag
*/

const rootNode = document.getRootNode();
console.log(rootNode);
console.log(rootNode.childNodes); // returns node list
console.log(rootNode.childNodes[0].childNodes);
const headElementNode =rootNode.childNodes[0].childNodes[0];
const bodyElementNode =rootNode.childNodes[0].childNodes[2];
const textNode =rootNode.childNodes[0].childNodes[1];
console.log(headElementNode);
console.log(textNode)

console.log(' my parent node',headElementNode.parentNode)

console.log(headElementNode.nextSibling.nextSibling)
console.log(headElementNode.nextSibling) // gives text object and in data field we get '\n  ' which represents newline space between head and body

// white space : normal and pre in style
console.log(headElementNode.nextElementSibling); //returns next sibling but ignores text node

const h1 = document.querySelector('h1');
const div = h1.parentNode;
div.style.color ='#efefef'
div.style.backgroundColor ='#333'

// by applying querySelector to an elements it will search within its children

const head = document.querySelector('head')
const title = head.querySelector('title')
console.log(title)
