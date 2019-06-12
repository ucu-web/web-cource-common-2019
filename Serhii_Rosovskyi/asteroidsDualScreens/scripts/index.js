import Game from "./Game.js";
import Actors from "./Actors.js";

const getRandomColor = () => {
  return "#" + (((1 << 24) * Math.random()) | 0).toString(16);
};

const getRandomId = () => {
  return (
    "_" +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
};

const clamp = (min, max, num) => (num <= min ? min : num >= max ? max : num);

const distanceBetweenTwoCoordinates = (x1, y1, x2, y2) =>
  Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

const getRandomCoordinate = (canvas, radius) => ({
  x: clamp(radius, canvas.width - radius * 2, Math.random() * canvas.width),
  y: clamp(radius, canvas.height - radius * 2, Math.random() * canvas.height)
});

export { distanceBetweenTwoCoordinates, getRandomCoordinate, getRandomColor };

const main = (fields = 1, players = 1) => {
  let canvas = document.getElementsByTagName("canvas");
  let numberOfCanvases = canvas.length;
  if (fields > canvas.length) {
    for (let i = 0; i < fields - numberOfCanvases; i++) {
      let newCanvas = document.createElement("canvas");
      let randomId = 0;
      do {
        randomId = getRandomId();
      } while (document.getElementById(randomId) !== null);
      newCanvas.id = randomId;
      document.getElementsByTagName("body")[0].appendChild(newCanvas);
    }
  }

  const actors = [
    new Actors("KeyA", "KeyD", "KeyW", "KeyS"),
    new Actors("ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"),
    new Actors("KeyJ", "KeyL", "KeyI", "KeyK")
  ];

  Array.from(
    Array(fields),
    (x, index) =>
      new Game(
        canvas[index].id,
        players,
        fields,
        players > 1 ? actors.slice(0, players) : [actors[index]]
      )
  );
};

main(1, 1);
