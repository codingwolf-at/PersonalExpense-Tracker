const element = document.querySelector('#btn-counter');

let counter = 0;

function likeCountHandler() {
    counter++;
    console.log(counter);
}

element.addEventListener("click", likeCountHandler);