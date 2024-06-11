let input = document.getElementsByTagName("input")[0]
let addBtn = document.getElementById("add")
let task_list = document.getElementsByClassName("task-list")[0] 
let totalTSK = document.getElementById("total")
let completeTSK = document.getElementById("complete")

let taskIdCounter = 0; // To assign a unique ID to each task item

const addTask = function(){
    let ele = 
    `
    <span>${input.value}</span>
    <button class="delete" onclick="removeTask(${taskIdCounter})">Delete</button>
    `
   const li = document.createElement('li')
   li.innerHTML=ele
   li.setAttribute('id', `task-${taskIdCounter}`); // Assign a unique ID to the <li> element
   task_list.appendChild(li)
   input.value = '';
   li.addEventListener("click", toggleComplete); // Add event listener to mark as complete
   
   taskIdCounter++; // Increment taskIdCounter for the next task
   countTotal();
}

const countTotal =()=>{
    let numberT = task_list.getElementsByTagName('li').length;
    totalTSK.innerText = `${numberT}`;
}

const countCompleted =function(){
    let numberC = task_list.querySelectorAll('.completed').length
    completeTSK.innerText = `${numberC}`;
}

const toggleComplete = function() {
    this.classList.toggle('completed');
    countCompleted();
}

const removeTask = function(taskId) {
    const taskToRemove = document.getElementById(`task-${taskId}`);
    taskToRemove.remove();
    countTotal();
    countCompleted();
}
