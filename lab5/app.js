// section 
let list = document.getElementById('task-list');
let btnAdd = document.getElementById('btnAdd');

// listener for inputs
let inputName = document.getElementById('task-name');
inputName.addEventListener('keyup', () => {
    if (inputName.value.length < 5) {
        btnAdd.disabled = true;
        btnAdd.classList.add('btn-disabled');
    } else {
        btnAdd.classList.remove('btn-disabled');
        btnAdd.disabled = false;
    }
});

btnAdd.addEventListener('click', () => {
    addRow();
});

function addRow() {
    // get task name + description
    let task_name = document.getElementById('task-name').value;
    let task_des = document.getElementById('task-description').value;
    let disabledInput = true;

    if (task_name.length < 5 || task_des.length < 20) {
        alert('Name length must be greater or eqal 5 characters and Description must be greater or eqal 20 characters');
    } else {
        // create row
        let row = document.createElement('div');
        row.classList.add('row');

        // create name
        let name = document.createElement('input');
        name.type = 'text';
        name.value = task_name;
        name.disabled = disabledInput;

        // create description
        let description = document.createElement('input');
        description.value = task_des;
        description.disabled = disabledInput;

        // create button delete
        let btnDel = document.createElement('button');
        btnDel.innerHTML = 'Delete';
        btnDel.classList.add('btn-del');

        // create button edit
        let btnEdit = document.createElement('button');
        btnEdit.innerHTML = 'Edit';
        btnEdit.classList.add('btn-edit');

        // add child to row
        row.appendChild(name);
        row.appendChild(description);
        row.appendChild(btnDel);
        row.appendChild(btnEdit);
        // add row to list
        list.appendChild(row);

        // edit event
        btnEdit.addEventListener('click', () => {

            if (description.value.length < 20 || name.value.length < 5) {
                alert('can\'t update');
            } else {
                disabledInput = !disabledInput;
                name.disabled = disabledInput;
                description.disabled = disabledInput;

                // change button label => update
                btnEdit.innerHTML = disabledInput ? 'Edit' : 'Update';
            }
        });

        // delete event
        btnDel.addEventListener('click', () => {
            list.removeChild(row);
        });
    }
}