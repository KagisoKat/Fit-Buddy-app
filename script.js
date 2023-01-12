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
    })

})