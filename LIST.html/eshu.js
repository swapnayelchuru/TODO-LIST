document.addEventListener('DOMContentLoaded', function() {
  const todoInput = document.getElementById('todo-input');
  const addBtn = document.getElementById('add-btn');
  const todoList = document.getElementById('todo-list');

  addBtn.addEventListener('click', function() {
      const todoText = todoInput.value.trim();

      if (todoText !== '') {
          const li = document.createElement('li');
          li.textContent = todoText;

          const deleteBtn = document.createElement('button');
          deleteBtn.textContent = 'Delete';
          deleteBtn.className = 'delete-btn';
          deleteBtn.addEventListener('click', function() {
              li.remove();
          });

          li.appendChild(deleteBtn);
          todoList.appendChild(li);
          todoInput.value = '';
      } else {
          alert('Please enter a valid todo!');
      }
  });
});
