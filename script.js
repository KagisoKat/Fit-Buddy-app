window.addEventListener("load", () => {
    todo = JSON.parse(localStorage.getItem("todos")) || [];
    const nameInput = document.querySelector("#name");
    const newToDoForm = document.querySelector("#new-to-do-form");

    const username = localStorage.getItem("username") || "";

    nameInput.value = username;

    nameInput.addEventListener("change", e =>{
        localStorage.setItem("username, e.target.value");
    })
})