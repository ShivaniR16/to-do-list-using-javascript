const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
todoForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const task = todoInput.value.trim();
    if (task !== '') {
        addTask(task);
        todoInput.value = ''; 
    }
});
function addTask(task) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${task}</span>
        <button class="delete-btn">Delete</button><br><br>
    `;
    todoList.appendChild(li);
    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });
}
