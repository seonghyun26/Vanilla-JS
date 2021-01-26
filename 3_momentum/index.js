const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";
const CLICKED_CLASS = "clicked";

const title = document.querySelector("#title");

function handleClick() {
    title.classList.toggle(CLICKED_CLASS);
}


function init(){
    title.addEventListener("click", handleClick);    
}

init();