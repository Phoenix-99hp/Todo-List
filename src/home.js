const showHome = () => {
    document.getElementById("content").innerHTML = `
    <header>Todo List</header>
    <div id="clear">Your todo list is clear</div>
    <button id="newTodo" class="btnHover">New Todo</button>`
}

export default showHome