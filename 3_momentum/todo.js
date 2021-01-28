const toDoForm = document.querySelector(".js-todoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-todoList");

const TODOS_LS = 'toDos';

let toDos = [];


function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanedToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanedToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const del_btn = document.createElement("button");
    const span = document.createElement("span");
    const newID = toDos.length + 1;
    del_btn.innerText = "❌";
    del_btn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(del_btn);
    li.appendChild(span);
    li.id = newID;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newID
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
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
    toDoForm.addEventListener("submit", handleSubmit);
}

init();