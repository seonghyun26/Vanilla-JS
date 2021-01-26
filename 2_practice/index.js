const calculator = {
    plus : function(a, b) {
        return a + b;
    },
    minus : function(a, b) {
        return a - b;
    },
    mul : function(a, b) {
        return a * b;
    },
    div : function(a, b) {
        return a / b;
    }
}

const plus = calculator.plus(5, 5)
const minus = calculator.minus(5, 5)
const mul = calculator.mul(5, 5)
const div = calculator.div(5, 5)

function handleClick_1() {
    console.log(title.style.color);
    const current_color = title.style.color;
    if ( current_color === BASE_COLOR ) {
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

function handleClick_2(){
    const currentClass = title.classList;

    if( !currentClass.contains(CLICKED_CLASS) ){
        title.classList.add(CLICKED_CLASS);
    } else {
        title.classList.remove(CLICKED_CLASS);
    }
}

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