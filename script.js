document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add tasks
    function addTask(taskText, save= true) {
        if(!taskText){
        const taskText = taskInput.value.trim();
        }
        if (taskText === "") {
            alert("Enter a Task");
        } else {
            const listItem = document.createElement("li");
            listItem.textContent = taskText;
            const removeButton = document.createElement('button');
            removeButton.textContent = "Remove";
            removeButton.classList.add("remove-btn");
            removeButton.addEventListener('click', function () {
                taskList.removeChild(listItem);
                saveTasks();
            });

            listItem.appendChild(removeButton);
            taskList.appendChild(listItem);
            taskInput.value = "";
            if (save) {
                const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
                storedTasks.push(taskText);
                localStorage.setItem('tasks', JSON.stringify(storedTasks));
            }
            saveTasks();
        }
        
    }
    //Function to save tasks
    function saveTasks(){
        const tasks = [];

        taskList.querySelectorAll('li').forEach((listItem)=>{
            tasks.push(listItem.firstChild.textContent);
        })
        localStorage.setItem('tasks',JSON.stringify(tasks));

    }

    //Function to load tasks
    function loadTasks(){
        const storedTasks = JSON.parse(localStorage.getItem("tasks" || "[]"));
        storedTasks.forEach((taskText) => addTask(taskText,false));
    }

    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
    loadTasks();
});
