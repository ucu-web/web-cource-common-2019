import {drawField} from "./drawing.js"
import {initCharacters, draw, keyController} from "./gameHelpers";

const startGame = (canvas) => {
    let ctx = canvas.getContext("2d");

    let [field_size, cell_size] = [canvas.width, canvas.width / 25];
    let characters = initCharacters(field_size, cell_size);
    console.log(characters);
    drawField(ctx, field_size, cell_size);
    setInterval(draw.bind(null, ctx, field_size, cell_size, characters), 180);

    document.onkeypress = keyController.bind(null, characters[0]);
};

startGame(document.getElementById("field"));
