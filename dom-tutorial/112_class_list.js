const sectionTodo = document.querySelector('.section-todo');
console.log(sectionTodo.classList) //returns DOMTokenList where in which we can add and remove the classes, contains()

sectionTodo.classList.add('bg-dark')
sectionTodo.classList.remove('container')
console.log(sectionTodo.classList.contains('container')) 

sectionTodo.classList.toggle('bg-dark') // if exists before then it removes and if not exists before then it will get added


console.log(sectionTodo.classList) 