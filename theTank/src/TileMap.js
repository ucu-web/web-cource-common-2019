import Tile from "./Tile"

function TileMap(imageName, sourceX, sourceY, hitBoxes, width=35, height=35) {
    Tile.apply(this, arguments);
    this.hitBoxes = hitBoxes || [];
}

export default TileMap