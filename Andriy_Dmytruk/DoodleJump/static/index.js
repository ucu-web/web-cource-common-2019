import DoodleGame from "./DoodleGame/Game";

const doodleGame = new DoodleGame(document.querySelector("body"));
doodleGame.play();

window.game = doodleGame;
