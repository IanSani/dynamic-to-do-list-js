document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add tasks
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Enter a Task");
        } else {
            const listItem = document.createElement("li");
            listItem.textContent = taskText;
            const removeButton = document.createElement('button');
            removeButton.textContent = "Remove";
            removeButton.classList.add= "remove-btn";
            removeButton.addEventListener('click', function () {
                taskList.removeChild(listItem);
            });

            listItem.appendChild(removeButton);
            taskList.appendChild(listItem);
            taskInput.value = "";
        }
    }
    //Function to save tasks
    function saveTask(){
        const tasks = [];

        tasksList.querySelectorAll('li').forEach((tasks)=>{
            task.push(listItem.firstchild.textContent);
        })
        localStorage.getItem('tasks' JSON.stringify(tasks));

    }

    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
