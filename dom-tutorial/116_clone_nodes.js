// clone nodes
const ul = document.querySelector('.todo-list');
const li = document.querySelector('li');
li.textContent= 'new todo';
ul.append(li);

// most recent will be effective

const li2 = li.cloneNode(true); //true for deep cloning\
ul.prepend(li2);

