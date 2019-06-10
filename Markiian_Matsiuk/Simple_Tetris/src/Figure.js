export default class Figure {
  constructor(coordinates, shape) {
    this.coordinates = coordinates;
    this.shape = shape;
  }

  setCoordinates(newCoordinates) {
    this.coordinates = newCoordinates;
  }

  setShape(newShape) {
    this.shape = newShape;
  }

  getBlockFromGlobalCoordinates([x, y]) {
    let [localX, localY] = [x - this.coordinates[0], y - this.coordinates[1]];
    if (
      localX < 0 ||
      localX >= this.shape[0].length ||
      localY < 0 ||
      localY >= this.shape.length
    )
      return 0;
    return this.shape[localY][localX];
  }
}