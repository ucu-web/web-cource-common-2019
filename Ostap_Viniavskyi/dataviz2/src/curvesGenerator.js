export const getCubicBezierCurve = (start, finish) => {
  const deviation = 0.4;
  const heightDifference = finish.y - start.y,
    widthDifference = finish.x - start.x;
  const inter1 = {
      x: start.x + widthDifference / 4,
      y: start.y + ((1 - deviation) * heightDifference) / 4
    },
    inter2 = {
      x: start.x + (widthDifference * 3) / 4,
      y: start.y + ((1 + deviation) * (heightDifference * 3)) / 4
    };
  return `M ${start.x} ${start.y} C ${inter1.x} ${inter1.y + 1} ${inter2.x} ${
    inter2.y
  }, ${finish.x} ${finish.y}`;
};
