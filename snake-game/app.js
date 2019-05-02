import Game from "./Game.js"

let canvas = document.getElementById("game");
canvas.height = 500;
canvas.width = 500;

let game = new Game( canvas );
game.play();

console.log(game);