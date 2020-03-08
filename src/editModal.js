const showEditModal = () => {
    document.getElementById("content").innerHTML =
        ` <header>Edit Todo</header>
        <div id="errorEdit" class="inactive"><p id="errorEditMsg">One or more field entries is invalid</p><button id="errorEditOk" class="btnHover">OK</button></div>
        <div id="editModal">
        <label>Title </label><input type="text" id="editTitle">
            <p id="validateTitleEdit" class="hide">Titles are limited to 50 characters and must consist of: [a-z][A-Z][0-9][space][':]</p>
            <label>Description (optional) </label><textarea id="editDescription"></textarea>
            <p id="validateDescriptionEdit" class="hide">Descriptions may only consist of: [a-z][A-Z][0-9][space]['.?!;:]</p>
            <label>Due Date </label><input type="date" id="editDueDate">
            <p id="validateDateEdit" class="hide">Dates may only consist of: [0-9][/][-]</p>
            <label>Priority: </label><select id="editPriority" style="height:30px;">
                <option value="" selected disabled>Select an option...</option>
                <option value="High" id="editOptionHigh">High</option>
                <option value="Medium" id="editOptionMedium">Medium</option>
                <option value="Low" id="editOptionLow">Low</option>
            </select>
            <p id="validatePriorityEdit" class="hide">You must select a priority level</p>
            <div class="buttonContainer"><button id="saveEdit" class="btnHover">Save</button><button id="cancelEdit" class="btnHover">Cancel</button></div>
        </div>`
}

export default showEditModal