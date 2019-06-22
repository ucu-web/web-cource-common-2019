const getCubicBezierCurve = (start, finish) => {
  const deviation = 0.3;
  const heightDifference = finish.y - start.y,
    widthDifference = finish.x - start.x;
  const inter1 = {
      x: start.x + widthDifference / 4,
      y: start.y + heightDifference / 4 - deviation * heightDifference
    },
    inter2 = {
      x: start.x + (widthDifference * 3) / 4,
      y: start.y + heightDifference * 3 / 4 + deviation * heightDifference
    };
  return `C ${inter1.x} ${inter1.y } ${inter2.x} ${inter2.y}, ${finish.x} ${
    finish.y
  }`;
};

export const getLinkPath = (topLeft, bottomLeft, topRight, bottomRight) => {
  return (
    `M ${topLeft.x} ${topLeft.y} ` +
    getCubicBezierCurve(topLeft, topRight) +
    `V ${bottomRight.y}` +
    getCubicBezierCurve(bottomRight, bottomLeft) +
    "Z"
  );
};
