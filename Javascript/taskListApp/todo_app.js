const taskInput = document.querySelector(".task_input");
const taskButton = document.querySelector(".task_button");
const taskList = document.querySelector(".task_list");
const filterOption = document.querySelector(".task_filter");

document.addEventListener("DOMContentLoaded", getTasks);
taskButton.addEventListener("click", addTask);
taskList.addEventListener("click", deleteTask);
filterOption.addEventListener("click", filterTasks);

//Add a task to the list.
function addTask(event) {
  //Stops the form from submitting when clicking on +.
  event.preventDefault();
  //Create the UIEvent.
  taskUICreation();
  //Clear the task input box.
  taskInput.value = "";
}
//Delete a task from the list.
function deleteTask(event) {
  const item = event.target;
  //Removes the task if deleted.
  if (item.classList[0] === "deleted_button") {
    const parent = item.parentElement;
    parent.classList.add("fall");
    removeLocalTasks(parent);
    parent.addEventListener("transitionend", function () {
      parent.remove();
    });
  }
  //Switch task to completed.
  if (item.classList[0] === "completed_button") {
    const parent = item.parentElement;
    parent.classList.toggle("completed");
  }
}

function filterTasks(event) {
  const tasks = taskList.childNodes;
  console.log(tasks);
  tasks.forEach(function (task) {
    switch (event.target.value) {
      case "all":
        task.style.display = "flex";
        break;
      case "completed":
        if (task.classList.contains("completed")) {
          task.style.display = "flex";
        } else {
          task.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!task.classList.contains("completed")) {
          task.style.display = "flex";
        } else {
          task.style.display = "none";
        }
        break;
    }
  });
}

function saveLocalTasks(task) {
  let tasks;
  //Check if there are saved tasks.
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTasks() {
  let tasks;
  //Check if there are saved tasks.
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.forEach(function (task) {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    //Creating the list for the tasks.
    const newTask = document.createElement("li");
    newTask.innerText = task;
    newTask.classList.add("task_item");
    taskDiv.appendChild(newTask);
    //Creating the completed task button.
    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<i class = "fas fa-check"></i>`;
    completedButton.classList.add("completed_button");
    taskDiv.appendChild(completedButton);
    //Creating the delete task button.
    const deletedButton = document.createElement("button");
    deletedButton.innerHTML = `<i class = "fas fa-trash"></i>`;
    deletedButton.classList.add("deleted_button");
    taskDiv.appendChild(deletedButton);
    //Add the entire task and buutons to the screen.
    taskList.appendChild(taskDiv);
  });
}

function removeLocalTasks(task) {
  let tasks;
  //Check if there are saved tasks.
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  const taskIndex = task.children[0].innerText;
  tasks.splice(tasks.indexOf(taskIndex), 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function taskUICreation() {
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");
  //Creating the list for the tasks.
  const newTask = document.createElement("li");
  newTask.innerText = taskInput.value;
  newTask.classList.add("task_item");
  taskDiv.appendChild(newTask);
  //Save tasks to local storage.
  saveLocalTasks(taskInput.value);
  //Creating the completed task button.
  const completedButton = document.createElement("button");
  completedButton.innerHTML = `<i class = "fas fa-check"></i>`;
  completedButton.classList.add("completed_button");
  taskDiv.appendChild(completedButton);
  //Creating the delete task button.
  const deletedButton = document.createElement("button");
  deletedButton.innerHTML = `<i class = "fas fa-trash"></i>`;
  deletedButton.classList.add("deleted_button");
  taskDiv.appendChild(deletedButton);
  //Add the entire task and buutons to the screen.
  taskList.appendChild(taskDiv);
}

function acessLocalStorage() {}
