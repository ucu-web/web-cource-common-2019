let items = document.getElementsByClassName("main-news__item");
let next_btn = document.getElementsByClassName("main-news__next")[0];
let prev_btn = document.getElementsByClassName("main-news__prev")[0];
let spots = document.getElementsByClassName("each-spot");

let x = 0;

function displayNext() {
    items[x].classList.remove("news-active");
    spots[x].classList.remove("spot-active");
    x = (x === items.length - 1) ? 0 : x + 1;
    items[x].classList.add("news-active");
    spots[x].classList.add("spot-active");
}

function displayPrevious() {
    items[x].classList.remove("news-active");
    spots[x].classList.remove("spot-active");
    x = (x <= 0) ? items.length - 1 : x - 1;
    items[x].classList.add("news-active");
    spots[x].classList.add("spot-active");
}

function startTimer() {
    setInterval(displayNext, 15000);
}

next_btn.addEventListener("click", displayNext);
prev_btn.addEventListener("click", displayPrevious);
startTimer();