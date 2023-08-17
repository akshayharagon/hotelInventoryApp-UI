// document.createElement()
// append
// prepend
// remove


const newTodoItem = document.createElement('li');
// const newTodoItemText = document.createTextNode('Teach students');
// newTodoItem.append(newTodoItemText);
newTodoItem.textContent = 'tech students';
console.log(newTodoItem);

const todoList = document.querySelector('.todo-list');
todoList.append(newTodoItem);
todoList.prepend(newTodoItem);

// li can be removed using remove()

// inserting befor and after

todoList.before(newTodoItem);
todoList.after(newTodoItem);

