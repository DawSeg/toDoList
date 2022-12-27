const input = document.getElementById('input');
const addInput = document.getElementById('add-input');
const todos = document.getElementById('todos');

addInput.addEventListener('click', function(){
  let todo = document.createElement('p');
  todo.className = 'todo';
  todo.innerText = input.value;
  todos.appendChild(todo);
  input.value = '';

  todo.addEventListener('click', function(){
    todo.style.textDecoration = 'line-through';
  });

  todo.addEventListener('dblclick', function() {
    todos.removeChild(todo);   
  });
});