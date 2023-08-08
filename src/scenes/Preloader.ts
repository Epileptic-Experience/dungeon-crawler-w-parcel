import Phaser from "phaser";

export default class Preloader extends Phaser.Scene {
    constructor() { 
        super("preloader");
    }

    preload() {
        this.load.image("tiles", "/assets/map/jota.png");
        this.load.tilemapTiledJSON("dungeon", "assets/map/dungeon01Export.json");
    }

    create() {
        this.scene.start("game");
    }
}
