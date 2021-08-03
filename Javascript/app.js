const todoInput = document.querySelector(".todo_input");
const todoButton = document.querySelector(".todo_button");
const todoList = document.querySelector(".todo_List");

todoButton.addEventListener("click", addTodo);

function addTodo(event) {
  event.preventDefault();
}
