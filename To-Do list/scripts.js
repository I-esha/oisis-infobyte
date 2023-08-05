const todoList = document.getElementById('todo-list');
const taskInput = document.getElementById('taskInput');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.classList.add('task-item');
        li.innerHTML = `
      <span class="task-text">${taskText}</span>
      <span class="delete-btn" onclick="deleteTask(this)">✖</span>
    `;
        todoList.appendChild(li);
        taskInput.value = '';

        li.addEventListener('dblclick', () => {
            li.classList.toggle('priority');
        });
    }
}

function deleteTask(deleteButton) {
    const listItem = deleteButton.parentElement;
    listItem.remove();
}

todoList.addEventListener('click', (event) => {
    if (event.target.classList.contains('task-text')) {
        event.target.parentElement.classList.toggle('completed');
    }
});
