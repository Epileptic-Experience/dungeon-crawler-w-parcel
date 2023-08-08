import Phaser from "phaser";

class Game extends Phaser.Scene {
    constructor() {
        super("game")
    }
    preload() {
   

    }
    create() {
   this.add.image(100,100 ,"tiles")
        console.log("ENTRO")
     
    }
}

export default Game