// Lesson 06 - JSON-Powered TODO App

// Check for existing TODOs in localStorage or start fresh
let todos = JSON.parse(localStorage.getItem("todos")) || [];

const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

// Function to display all TODOs
function renderTodos() {
    list.innerHTML = "";
    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
      ${todo.text} - <em>${new Date(todo.createdAt).toLocaleString()}</em>
      <button onclick="deleteTodo(${index})">Delete</button>
    `;
        list.appendChild(li);
    });
}

// Add new TODO
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTodo = {
        text: input.value.trim(),
        createdAt: Date.now()
    };
    if (newTodo.text !== "") {
        todos.push(newTodo);
        localStorage.setItem("todos", JSON.stringify(todos));
        input.value = "";
        renderTodos();
    }
});

// Delete TODO
function deleteTodo(index) {
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodos();
}

// Load any saved TODOs on page load
renderTodos();
