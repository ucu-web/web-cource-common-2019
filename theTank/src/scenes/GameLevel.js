import Scene from "../Scene"
import TileFactory from "../TileFactory"
import Player from "../Player"

export default class GameLevel extends Scene {
    constructor(game) {
        super(game);
        this.tiles = new TileFactory('tiles', 245, 105);

        this.playerTank = new Player(this.game.controlState);
        this.playerTank.x = 8 * 35;
        this.playerTank.y = 24 * 35;
    }

    init() {
        super.init();
        const mapData = require('../levelMaps/level1.json');
        this.levelMap = this.game.gameWindow.createMap('level1', mapData, this.tiles);
        // console.log('tile map:', this.levelMap);
    }

    update(time) {
        // console.log('update game level');
        this.playerTank.update(time);
    }

    render(time) {
        this.game.gameWindow.fill("black");
        this.game.gameWindow.drawTile(this.levelMap);
        this.game.gameWindow.drawTile(this.playerTank.view);
        super.render(time);
    }
}