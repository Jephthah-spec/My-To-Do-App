document.getElementById("addTaskBtn").addEventListener('click', function(){
    const taskName = document.getElementById("taskName").value; 
    const taskDate = document.getElementById("taskDate").value;
    const taskTime = document.getElementById("taskTime").value;

    if (!taskName) {
        alert("Please write task name")
        return;
    }
    if (!taskDate) {
        alert("Please write task date")
        return;
    }
    if (!taskTime) {
        alert("Please write task time")
        return;
    }
    const taskHouse = document.getElementById("task");

    const taskInput = document.createElement('div');

    taskInput.className = "task"

    taskInput.innerHTML = 
    `
    <span><li>Your task is: ${taskName} - Due date and time is ${taskDate} - ${taskTime}</li><span>
    <button class= "delBtn">Delete Task</button>
    `;

    taskInput.querySelector('.delBtn').addEventListener('click', function(){
        taskHouse.removeChild (taskInput)
    })
    taskHouse.appendChild(taskInput)

    document.getElementById("taskName").value = ""
    document.getElementById("taskDate").value = ""
    document.getElementById("taskTime").value = ""
})

