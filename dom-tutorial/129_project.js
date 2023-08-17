// while submitting form web page get refreshed so to avoid that we can use preventDefault() to event in callback
const todoForm = document.querySelector('.form-todo');
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector('.todo-list');

todoForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const newTodoText = todoInput.value;
    const newLi = document.createElement('li');
    const newLiInnerHtml = `
    <span class="text">${newTodoText}</span>
    <div class="todo-buttons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
    </div>`    
    newLi.innerHTML = newLiInnerHtml;
    todoList.append(newLi);
    todoInput.value='';
})

todoList.addEventListener('click', (e)=>{
    if(e.target.classList.contains('done')){
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = 'line-through'
    }
    if(e.target.classList.contains('remove')){
        const toBeRemovedLi =  e.target.parentNode.parentNode;
        toBeRemovedLi.remove();
    }
})