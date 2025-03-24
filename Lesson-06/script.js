// Lesson 06 - JSON-Powered TODO App

// Check for existing TODOs in localStorage or start fresh
let todos = JSON.parse(localStorage.getItem("todos")) || [];

const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

// insert missing-javascript here, you need to add two functions




























// Delete TODO
function deleteTodo(index) {
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodos();
}

// Load any saved TODOs on page load
renderTodos();
