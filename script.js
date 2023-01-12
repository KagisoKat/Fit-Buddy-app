
// the below variable is global and can be used outside of scope
window.addEventListener("load", () => {
    todo = JSON.parse(localStorage.getItem("todos")) || [];
    const nameInput = document.querySelector("#name");
    const newToDoForm = document.querySelector("#new-to-do-form");

    const username = localStorage.getItem("username") || "";

    nameInput.value = username;

    nameInput.addEventListener("change", e =>{
        localStorage.setItem("username, e.target.value");
    })
    newToDoForm.addEventListener("submit", e =>{
        e.preventDefault();

        const todo = {
            content: e.target.elements.content.value,
            category: e.target.elements.category.value,
            done: false,
            createdAt: new Date().getDate()
        }

        todos.push(todo);

        localStorage.setItem("todos", JSON.stringify(todos));

        e.target.reset();

        DisplayTodos();

    })

})

function DisplayTodos () {
    const todoList = document.querySelector("#todo-list");

    todoList.innerHTML = "";

    todos.forEach(todo => {
        const todoItem = document.createElement("div");
        todoItem.classList.add("todo-item")

        const label = document.createElement("label");
        const input = document.createElement("input");
        const span = document.createElement("span");
        const content = document.createElement("div");
        const actions = document.createElement("div");
        const edit = document.createElement("button");
        const deleteButton = document.createElement("button");
        
        input.type = "checkbox";
        input.checked = todo.done;
        span.classList.add("bubble")

        if (todo.category == "personal") {
            span.classList.add("personal");
        } else {
           span.classList.add("business"); 
        }
        
        content.innerHTML = `<input type="text" value="${todo.content}" readonly>`;
		edit.innerHTML = 'Edit';
		deleteButton.innerHTML = 'Delete';

		label.appendChild(input);
		label.appendChild(span);
		actions.appendChild(edit);
		actions.appendChild(deleteButton);
		todoItem.appendChild(label);
		todoItem.appendChild(content);
		todoItem.appendChild(actions);

		todoList.appendChild(todoItem);

		if (todo.done) {
			todoItem.classList.add('done');
        }
        
    });



}