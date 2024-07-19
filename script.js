document.addEventListener('DOMContentLoaded',()=>{
   const addButton = document.getElementById('add-task-btn');
   const taskInput = document.getElementById('task-input');
   const taskList = document.getElementById('task-list');

   //Function to add tasks
   function addTask(){
    const taskText = document.getElementById(task-input).value.trim();
    if(taskText === ""){
        alert("Enter a Task");
    }else{
        const listItem = document.createElement("li");
        listItem.textContent= taskText;
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";
        removeButton.addEventListener('click',function(){
            taskList.removeChild("li");
            listItem.appendChild(removeButton);
            taskList.appendChild(listItem);
            taskInput.value.textContent = "";
        })
    }
   }
})