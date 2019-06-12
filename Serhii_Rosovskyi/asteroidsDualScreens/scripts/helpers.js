export const moveSpaceshipUpButton = (
  ev,
  shipNumberOne = undefined,
  shipNumberTwo = undefined,
  timeRunning
) => {
  console.log(ev.key);
  if (shipNumberOne) {
    ev.key === "w"
      ? (shipNumberOne.moveing = true)
      : ev.key === "a"
      ? (shipNumberOne.rotCoef = 1)
      : ev.key === "d"
      ? (shipNumberOne.rotCoef = -1)
      : ev.key === "s" || ev.key === " "
      ? shipNumberOne.fire(timeRunning)
      : null;
  }
  if (shipNumberTwo) {
    ev.key === "ArrowUp"
      ? (shipNumberTwo.moveing = true)
      : ev.key === "ArrowLeft"
      ? (shipNumberTwo.rotCoef = 1)
      : ev.key === "ArrowRight"
      ? (shipNumberTwo.rotCoef = -1)
      : ev.key === "ArrowDown" || ev.key === "Backspace"
      ? shipNumberTwo.fire(timeRunning)
      : null;
  }
};

export const moveSpaceShipDownButton = (
  ev,
  shipNumberOne = undefined,
  shipNumberTwo = undefined
) => {
  if (shipNumberOne) {
    ev.key === "w"
      ? (shipNumberOne.moveing = false)
      : ev.key === "a" || ev.key === "d"
      ? (shipNumberOne.rotCoef = 0)
      : null;
  }
  if (shipNumberTwo) {
    ev.key === "ArrowUp"
      ? (shipNumberTwo.moveing = false)
      : ev.key === "ArrowLeft" || ev.key === "ArrowRight"
      ? (shipNumberTwo.rotCoef = 0)
      : null;
  }
};
