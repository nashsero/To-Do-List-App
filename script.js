document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', addTask);
    taskList.addEventListener('click', handleTaskActions);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task');
            return;
        }

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button class="complete">Complete</button>
                <button class="delete">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }

    function handleTaskActions(event) {
        if (event.target.classList.contains('complete')) {
            const li = event.target.parentElement.parentElement;
            li.classList.toggle('completed');
        } else if (event.target.classList.contains('delete')) {
            const li = event.target.parentElement.parentElement;
            taskList.removeChild(li);
        }
    }
});
