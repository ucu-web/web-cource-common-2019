let numSquares = 6;
let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {

        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");

        this.classList.add("selected");

        this.textContent === "Easy" ?	numSquares = 3 : numSquares = 6;

        reset();

    });
}

function reset() {

    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();

    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";

    for (let i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }

    h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function() {
    reset();
});

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++){

    squares[i].style.background = colors[i];

    squares[i].addEventListener("click", function() {

        let clickedColor = this.style.background;

        if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
        } else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}

function pickColor() {

    let random = Math.floor(Math.random() * colors.length);

    return colors[random];
}

function generateRandomColors(num) {

    let arr = [];

    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }

    return arr;
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);

    let g = Math.floor(Math.random() * 256);

    let b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}
