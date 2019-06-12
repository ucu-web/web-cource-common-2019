function Tile(imageName, sourceX, sourceY, width=35, height=35) {

    this.imageName = imageName;
    this.sourceX = sourceX;
    this.sourceY = sourceY;
    this.width = width;
    this.height = height;
    this.x = 0;
    this.y = 0;

    this.setXY = (x, y) => {
        this.x = x;
        this.y = y;
    }
}

export default Tile