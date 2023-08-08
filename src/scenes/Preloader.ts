import Phaser from "phaser";

export default class Preloader extends Phaser.Scene {
    constructor() { 
        super("preloader");
    }

    preload() {
        this.load.image("tiles", "/assets/map/dungeonTiles.png");
        this.load.image("tiles2", "/assets/map/dungeonTiles.png");

        this.load.tilemapTiledJSON("dungeon", "/assets/map/dungeon01Export.json");
    }

    create() {
        this.scene.start("game");
    }
}
