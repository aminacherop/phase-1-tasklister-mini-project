document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById('create-task-form');
  const taskInput = document.getElementById('new-task-description');
  const taskList = document.getElementById('tasks');
  taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskDescription = taskInput.value.trim();
    if (taskDescription !== '') {
      addTask(taskDescription);
      taskInput.value = '';
    }
  });


  function addTask(description) {
    const taskItem = document.createElement('li');
    taskItem.textContent = description;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.className = 'delete-button';
    deleteButton.addEventListener('click', function() {
      taskList.removeChild(taskItem);
    });
    
  
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
  }
  
});


