const body = document.querySelector("body");

const IMG_NUMBER = 3;


function paintImage(imgNumber){
    const image = new Image();
    image.src = `Images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
    //image.addEventListener("loadend", handleImgLoad());
}

function getRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER);
    console.log(number);
    return number;
};

function init(){
    const randomNumber = getRandom();
    paintImage(randomNumber);
}

init();