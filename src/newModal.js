const showNewModal = () => {
    document.getElementById("content").innerHTML = `
    <header>New Todo</header>
    <div id="errorNew" class="inactive"><p id="errorNewMsg">One or more field entries is invalid</p><button id="errorNewOk" class="btnHover">OK</button></div>
    <div id="newForm">
    <label>Title </label><br><input type="text" id="newTitle">
        <p id="validateTitle" class="hide">Titles are limited to 50 characters and must consist of [a-z][A-Z][0-9][space][':]</p>
        <label>Description (optional) </label><br><textarea id="newDescription"></textarea>
            <p id="validateDescription" class="hide">Descriptions may only consist of [a-z][A-Z][0-9][space]['.,?!;:]</p>
            <label>Due Date </label><br><input type="date" id="newDueDate">
                <p id="validateDate" class="hide">Dates may only consist of: [0-9][/][-]</p>
                    <label>Priority </label><br><select id="newPriority" style="height:30px;">
                        <option value="" selected disabled>Select an option...</option>
                        <option value="High" id="newOptionHigh">High</option>
                        <option value="Medium" id="newOptionMedium">Medium</option>
                        <option value="Low" id="newOptionLow">Low</option>
                    </select>
                    <p id="validatePriority" class="hide">You must select a priority level</p>
                    <div class="buttonContainer"><button id="saveNew" class="btnHover">Save</button><button id="cancelNew" class="btnHover">Cancel</button></div>
        </div>`
}

export default showNewModal