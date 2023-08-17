// elem.insertAdjacentElemnt(where, html)
// locations: beforeBegin, afterBegin, beforeEnd, afterEnd

const todoList = document.querySelector('.todo-list');
todoList.insertAdjacentHTML('beforeend',  '<li>Teach 1</li>'); //similar to append