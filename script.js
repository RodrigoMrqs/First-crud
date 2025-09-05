let task_list = [];
let index = 0;

function save_data() {
    let enter = document.getElementById("enter").value;
    let object_enter = {
        id: index,
        text: enter
    }
    index++;
    task_list.push(object_enter);
    console.log(task_list);
    
    show_data();
}

function show_data() {
    let ul = document.getElementById("results");
    let html = "";

    task_list.forEach( element =>{
        console.log(element);
        html += `<li>
            ${element.text}

            <button onclick="edit_data(${element.id})">
                Edit
            </button>

            <button onclick="del_data(${element.id})">
                Delete
            </button>
        </li>`;
    });
    
    ul.innerHTML = html;
}

function edit_data(id) {
    let html = `<input type="text" id="edit_input">
        <button onclick="edit_place(${id})">Save edit</button>`
    let edit_div = document.getElementById("edit_task");
    edit_div.innerHTML = html;
}

function edit_place(id) {
    let edit_input = document.getElementById("edit_input").value;
    let result = task_list.find(object_enter => object_enter.id === id);
    result.text = edit_input;
    
    show_data();

    let edit_div = document.getElementById("edit_task");
    edit_div.innerHTML = "";
}

function del_data(id) {
    let new_list = task_list.filter(object_enter => object_enter.id !== id);
    task_list = new_list;
    show_data();
}