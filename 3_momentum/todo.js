const todoForm = document.querySelector(".js-todoForm"),
    todoInput = todoForm.querySelector("input"),
    todoList = document.querySelector(".js-todoList");

const TODOS_LS = 'toDos';

const toDos = [];


function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const del_btn = document.createElement("button");
    const span = document.createElement("span");
    const newID = toDos.length + 1;
    del_btn.innerText = "❌";
    span.innerText = text;
    li.appendChild(del_btn);
    li.appendChild(span);
    li.id = newID;
    todoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newID
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = todoInput.value;
    paintToDo(currentValue);
    todoInput.value = "";
}

function loadToDos(){
    const loaded_toDos = localStorage.getItem(TODOS_LS);
    if( loaded_toDos !== null) {
        const parsed_toDos = JSON.parse(loaded_toDos);
        parsed_toDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        });
    }
}


function init() {
    loadToDos();
    todoForm.addEventListener("submit", handleSubmit);
}

init();