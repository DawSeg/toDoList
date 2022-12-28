/*
const input = document.getElementById('input');
const addInput = document.getElementById('add-input');
const list = document.getElementById('list');

addInput.addEventListener('click', function(){
  let task = document.createElement('p');
  task.className = 'task';
  task.innerText = input.value;
  list.appendChild(task);
  input.value = '';

  task.addEventListener('click', function(){
    task.style.textDecoration = 'line-through';
  });

  task.addEventListener('dblclick', function() {
    list.removeChild(task);   
  });
});
*/



const input = document.getElementById('input');
const addInput = document.getElementById('add-input');
const list = document.getElementById('list');
//const task = document.getElementById('task');
const done = document.getElementById('done');
const clear = document.getElementById('clear');

addInput.addEventListener('click', function(){
  let task = document.createElement('li', 'done');
  task.classname = 'task';
  task.innerText = input.value;
  list.appendChild('task');
  input.value = '';

  done.addEventListener('click', function(){
    task.style.textDecoration = 'line-through';
  });

  clear.addEventListener('click', function(){
    //const task = document.querySelectorAll('li');
    list.removeChild('task');
  });
});


