import Tile from "./Tile"
import Animation from './scenes/Animation'

function TileFactory(imageName, imageWidth, imageHeight, tileWidth = 35, tileHeight = 35) {
    // console.log('got', ...arguments);
    this.imageName = imageName;
    this.imageWidth = imageWidth;
    this.imageHeight = imageHeight;
    this.tileWidth = tileWidth;
    this.tileHeight = tileHeight;

    this.getSourceX = index => (--index * this.tileWidth) % this.imageWidth;

    this.getSourceY = index => Math.trunc((--index * this.tileWidth) / this.imageWidth) * this.tileHeight;

    this.getAnimation = (indexes, speed, repeat=true, autorun=true) => {
        // console.log('indexes:', indexes);
        return new Animation(
        this.imageName,
        indexes.map(index => ({sx: this.getSourceX(index), sy: this.getSourceY(index)})),
        speed,
        repeat,
        autorun,
        this.tileWidth,
        this.tileHeight
    );
    };

    this.getTile = index => new Tile(
        this.imageName,
        this.getSourceX(index),
        this.getSourceY(index),
        this.tileWidth,
        this.tileHeight
    );
}

export default TileFactory