import Todo from "./todo.js";
import showHome from "./home.js";
import showNewModal from "./newModal.js"
import showEditModal from "./editModal.js";
import "../assets/css/style.css";

const contentDiv = document.getElementById("content");

let todos = [];
let selectedTodoId;

renderIndex();

function renderIndex() {
    addEvtListenerHome();
    getStoredTodos();
    if (todos.length === 0) {
        return;
    }
    else {
        generateHTML();
    }
}

function getStoredTodos() {
    let storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos !== null) {
        todos = storedTodos;
    }
}

function storeTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function updateId() {
    for (let i = 0; i < todos.length; i++) {
        todos[i].id = i;
    }
}

function translateDate(date) {
    let year = date.match(/\d+/)[0];
    let month = date.match(/-\d\d-/)[0].match(/\d\d/)[0];
    let day = date.slice(-2);
    if (month.charAt(0) == 0) {
        month = month.charAt("1");
    }
    if (day.charAt(0) == 0) {
        day = day.charAt("1");
    }
    return month + "-" + day + "-" + year;
}

function reverseTranslateDate(date) {
    let year = date.slice(-4);
    let month = date.match(/\d+/)[0];
    let day = date.match(/-\d+-/)[0].match(/\d+/)[0];
    if (month.charAt("1") === "") {
        let secondChar = month.charAt("0").toString();
        month = "0" + secondChar;
    }
    if (day.charAt("1") === "") {
        let secondChar = day.charAt("0").toString();
        day = "0" + secondChar;
    }
    return year + "-" + month + "-" + day;
}

function colorDate(priority) {
    let c;
    if (priority === "High") {
        c = "red";
    }
    else if (priority === "Medium") {
        c = "yellow";
    }
    else if (priority === "Low") {
        c = "green";
    }
    return c;
}

function validateInputs(title, description, date, priority) {
    if ((/^[\w\d\s-’':]+$/.test(title) === true) && (title.length <= 50) && (/^[\w\d\s-'’.,?!;:]*$/.test(description) === true) && (/^[\d-\/]+$/.test(date) === true) && ((/^\w+$/).test(priority) === true)) {
        return true
    }
    else { return false }
}

function generateHTML() {
    if (todos.length === 0) {
        showHome();
        addEvtListenerHome();
    }
    else {
        contentDiv.innerHTML = `<header>Todo List</header>
        <button id="newTodo" class="setOpacity btnHover">New Todo</button>`;
        for (let i = 0; i < todos.length; i++) {
            let coloredDate = colorDate(todos[i].priority);
            let translatedDate = translateDate(todos[i].dueDate);
            contentDiv.innerHTML +=
                `<div class="todoContainer">
                    <i class="fas fa-plus showDescription"></i>
                    <div class="todo">
                        <h4 class="title">${todos[i].title}</h4>
                        <p class="dueDate ${coloredDate}">${translatedDate}</p>
                        <div class="priority"></div>
                        <p class="idHolder">${todos[i].id}</p>
                        <p class="description inactive">${todos[i].description}</p>
                    </div>
                    <i class="far fa-edit editBtn"></i>
                    <i class="fas fa-trash deleteBtn"></i>
                </div>`;
        }
        addEvtListenersMain();
        sortTodos();
    }
}

function addEvtListenerHome() {
    document.getElementById("newTodo").addEventListener("click", (e) => {
        showNewModal();
        addEvtListenersNew(todos);
    });
}

function addKeyupListenersNew(title, description, date, priority) {
    const valTitle = document.getElementById("validateTitle");
    const valDescription = document.getElementById("validateDescription");
    const valDate = document.getElementById("validateDate");
    const valPriority = document.getElementById("validatePriority");
    title.addEventListener("keyup", (e) => {
        if ((/^[\w\d\s-'’:]+$/.test(title.value) === true) && (title.value.length <= 50)) {
            valTitle.classList.remove("show");
        }
        else if ((/^[\w\d\s-'’:]+$/.test(title.value) === false) || (title.value.length > 50)) {
            valTitle.classList.add("show");
        }
    });
    description.addEventListener("keyup", (e) => {
        if (/^[\w\d\s-'’.,?!;:]*$/.test(description.value) === true) {
            valDescription.classList.remove("show");
        }
        else if (/^[\w\d\s-'’.,?!;:]*$/.test(description.value) === false) {
            valDescription.classList.add("show");
        }
    });
    date.addEventListener("keyup", (e) => {
        if (/^[\d-\/]+$/.test(date.value) === true) {
            valDate.classList.remove("show");
        }
        else if (/^[\d-\/]+$/.test(date.value) === false) {
            valDate.classList.add("show");
        }
    });
    priority.addEventListener("keyup", (e) => {
        if (/^[\w\d\s-\']+$/.test(priority.value) === true) {
            valPriority.classList.remove("show");
        }
        else if (/^\w+$/.test(priority.value) === false) {
            valPriority.classList.add("show");
        }
    });
}

function addKeyupListenersEdit(title, description, date, priority) {
    const valTitle = document.getElementById("validateTitleEdit");
    const valDescription = document.getElementById("validateDescriptionEdit");
    const valDate = document.getElementById("validateDateEdit");
    const valPriority = document.getElementById("validatePriorityEdit");
    title.addEventListener("keyup", (e) => {
        if ((/^[\w\d\s-’':]+$/.test(title.value) === true) && (title.value.length <= 50)) {
            valTitle.classList.remove("show");
        }
        else if ((/^[\w\d\s-’':]+$/.test(title.value) === false) || (title.value.length > 50)) {
            valTitle.classList.add("show");
        }
    });
    description.addEventListener("keyup", (e) => {
        if (/^[\w\d\s-'’.,?!;:]*$/.test(description.value) === true) {
            valDescription.classList.remove("show");
        }
        else if (/^[\w\d\s-’'.,?!;:]*$/.test(description.value) === false) {
            valDescription.classList.add("show");
        }
    });
    date.addEventListener("keyup", (e) => {
        if (/^[\d-\/]+$/.test(date.value) === true) {
            valDate.classList.remove("show");
        }
        else if (/^[\d-\/]+$/.test(date.value) === false) {
            valDate.classList.add("show");
        }
    });
    priority.addEventListener("keyup", (e) => {
        if (/^[\w\d\s-\']+$/.test(priority.value) === true) {
            valPriority.classList.remove("show");
        }
        else if (/^\w+$/.test(priority.value) === false) {
            valPriority.classList.add("show");
        }
    });
}

function addEvtListenersNew(list) {
    const newTitle = document.getElementById("newTitle");
    const errorNew = document.getElementById("errorNew");
    const newForm = document.getElementById("newForm");
    document.getElementById("saveNew").addEventListener("click", (e) => {
        e.preventDefault();
        const newDescription = document.getElementById("newDescription");
        const newDueDate = document.getElementById("newDueDate");
        const newPriority = document.getElementById("newPriority");
        if ((list.length === 0) && (validateInputs(newTitle.value, newDescription.value, newDueDate.value, newPriority.value) === true)) {
            const newTodoItem = new Todo(newTitle.value.trim(), newDescription.value.trim(), newDueDate.value, newPriority.value, 0)
            list.push(newTodoItem);
            generateHTML();
            storeTodos();
        }
        else if (validateInputs(newTitle.value, newDescription.value, newDueDate.value, newPriority.value) === true) {
            const newTodoItem = new Todo(newTitle.value.trim(), newDescription.value.trim(), newDueDate.value, newPriority.value, list.length)
            list.push(newTodoItem);
            generateHTML();
            storeTodos();
        }
        else {
            errorNew.classList.toggle("inactive");
            newForm.classList.toggle("blur");
            document.getElementById("saveNew").disabled = true;
            document.getElementById("cancelNew").disabled = true;
            document.getElementById("saveNew").classList.remove("btnHover");
            document.getElementById("cancelNew").classList.remove("btnHover");
        }
    });

    document.getElementById("errorNewOk").addEventListener("click", (e) => {
        errorNew.classList.toggle("inactive");
        newForm.classList.toggle("blur");
        document.getElementById("saveNew").disabled = false;
        document.getElementById("cancelNew").disabled = false;
        document.getElementById("saveNew").classList.add("btnHover");
        document.getElementById("cancelNew").classList.add("btnHover");
    });

    document.getElementById("cancelNew").addEventListener("click", () => {
        generateHTML();
    });

    addKeyupListenersNew(newTitle, newDescription, newDueDate, newPriority);
}

function addEvtListenersEdit() {
    const editTitle = document.getElementById("editTitle");
    const editDescription = document.getElementById("editDescription");
    const editDueDate = document.getElementById("editDueDate");
    const editPriority = document.getElementById("editPriority");
    const errorEdit = document.getElementById("errorEdit");
    const editModal = document.getElementById("editModal");

    document.getElementById("cancelEdit").addEventListener("click", () => {
        generateHTML();
    });

    document.getElementById("saveEdit").addEventListener("click", (e) => {
        e.preventDefault();
        for (let i = 0; i < todos.length; i++) {
            if ((selectedTodoId == todos[i].id) && (validateInputs(editTitle.value, editDescription.value, editDueDate.value, editPriority.value)) === true) {
                todos[i].title = editTitle.value.trim();
                todos[i].description = editDescription.value.trim();
                todos[i].dueDate = editDueDate.value;
                if (editPriority.selectedIndex == 1) {
                    todos[i].priority = "High";
                }
                else if (editPriority.selectedIndex == 2) {
                    todos[i].priority = "Medium";
                }
                else if (editPriority.selectedIndex == 3) {
                    todos[i].priority = "Low";
                }
                generateHTML();
                storeTodos();
                break;
            }
            else {
                errorEdit.classList.toggle("inactive");
                editModal.classList.toggle("blur");
                document.getElementById("saveEdit").disabled = true;
                document.getElementById("cancelEdit").disabled = true;
                document.getElementById("saveEdit").classList.remove("btnHover");
                document.getElementById("cancelEdit").classList.remove("btnHover");
                break;
            }

        }
    });

    document.getElementById("errorEditOk").addEventListener("click", (e) => {
        errorEdit.classList.toggle("inactive");
        editModal.classList.toggle("blur");
        document.getElementById("saveEdit").disabled = false;
        document.getElementById("cancelEdit").disabled = false;
        document.getElementById("saveEdit").classList.add("btnHover");
        document.getElementById("cancelEdit").classList.add("btnHover");
    });

    addKeyupListenersEdit(editTitle, editDescription, editDueDate, editPriority);
}

function addEvtListenersMain() {
    document.getElementById("newTodo").addEventListener("click", (e) => {
        showNewModal();
        addEvtListenersNew(todos);
    });

    document.querySelectorAll(".editBtn").forEach((button) => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            selectedTodoId = button.previousElementSibling.children[3].innerText;
            showEditModal();
            addEvtListenersEdit();
            const editTitle = document.getElementById("editTitle");
            const editDescription = document.getElementById("editDescription");
            const editDueDate = document.getElementById("editDueDate");
            const editPriority = document.getElementById("editPriority");
            for (let i = 0; i < todos.length; i++) {
                if (selectedTodoId == todos[i].id) {
                    editTitle.value = todos[i].title;
                    editDescription.value = todos[i].description;
                    editDueDate.value = todos[i].dueDate;
                    if (todos[i].priority == "High") {
                        editPriority.selectedIndex = 1;
                        break;
                    }
                    else if (todos[i].priority == "Medium") {
                        editPriority.selectedIndex = 2;
                        break;
                    }
                    else if (todos[i].priority == "Low") {
                        editPriority.selectedIndex = 3;
                        break;
                    }
                }
            }
        })
    });

    document.querySelectorAll(".deleteBtn").forEach((button) => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            todos.splice(button.previousElementSibling.previousElementSibling.children[3].innerText, 1);
            updateId();
            generateHTML();
            storeTodos();
        })
    });

    document.querySelectorAll(".showDescription").forEach((button) => {
        button.addEventListener("click", (e) => {
            if (button.nextElementSibling.lastElementChild.innerText !== "") {
                button.nextElementSibling.lastElementChild.classList.toggle("inactive");
                button.classList.toggle("fa-plus");
                button.classList.toggle("fa-minus");
                if (button.innerText == "+") {
                    button.innerText = "-";
                }
                else if (button.innerText == "-") {
                    button.innerText = "+";
                }
            }
            else if (button.nextElementSibling.lastElementChild.innerText === "") {
                button.classList.toggle("fa-plus");
                button.classList.toggle("fa-minus");
                if (button.innerText == "+") {
                    button.innerText = "-";
                }
                else if (button.innerText == "-") {
                    button.innerText = "+";
                }
            }
        })
    })
}

function sortTodos() {
    let switching, i, x, y, shouldSwitch;
    switching = true;
    while (switching) {
        switching = false;
        for (i = 2; i < (contentDiv.children.length - 1); i++) {
            shouldSwitch = false;
            x = reverseTranslateDate(contentDiv.children[i].children[1].children[1].innerHTML);
            y = reverseTranslateDate(contentDiv.children[i + 1].children[1].children[1].innerHTML);
            if (((x.match(/\d+/)[0]) > (y.match(/\d+/)[0])) ||
                ((x.match(/\d+/)[0]) == (y.match(/\d+/)[0]) && (x.match(/-\d\d-/)[0].match(/\d\d/)[0] > y.match(/-\d\d-/)[0].match(/\d\d/)[0])) ||
                ((x.match(/\d+/)[0]) == (y.match(/\d+/)[0]) && (x.match(/-\d\d-/)[0].match(/\d\d/)[0] == y.match(/-\d\d-/)[0].match(/\d\d/)[0])) && (x.slice(-2) > y.slice(-2))) {
                shouldSwitch = true;
            }
            if (shouldSwitch) {
                contentDiv.children[i].parentNode.insertBefore(contentDiv.children[i + 1], contentDiv.children[i]);
                switching = true;
                let j = i - 2;
                let s = todos[j];
                let t = todos[j + 1];
                todos[j] = t;
                todos[j + 1] = s;
                updateId();
            }
        }
    }
}