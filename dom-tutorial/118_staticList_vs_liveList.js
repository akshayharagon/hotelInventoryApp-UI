// querySelector returns static list (even though appending new tag it will not reflect in' NodeList')
// getElementsBySomething returns live list ('HTML collection') 

const todoList = document.querySelectorAll('.todo-list li');
const newLi = document.createElement('li');
newLi.textContent='todo 6';
const todoItemList = document.querySelector('.todo-list');
todoItemList.append(newLi);



