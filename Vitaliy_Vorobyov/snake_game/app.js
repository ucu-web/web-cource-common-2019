import Game from "./Game.js"

let canvas1 = document.getElementById("game1");
canvas1.height = 500;
canvas1.width = 500;

let game1 = new Game( canvas1, ["w", "a", "s", "d"], ["ArrowUp", "ArrowLeft", "ArrowDown", "ArrowRight"] );

game1.play();