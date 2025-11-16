document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${taskText}</span>
            <div class="task-actions">
                <button class="complete-btn">Complete</button>
                <button class="remove-btn">Remove</button>
            </div>
        `;
        taskList.appendChild(listItem);
        taskInput.value = ''; // Clear input field

        // Add event listeners for the new buttons
        const completeBtn = listItem.querySelector('.complete-btn');
        const removeBtn = listItem.querySelector('.remove-btn');

        completeBtn.addEventListener('click', () => {
            listItem.classList.toggle('completed');
        });

        removeBtn.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });
    }

    // Add task on button click
    addTaskBtn.addEventListener('click', addTask);

    // Add task on Enter key press in the input field
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});