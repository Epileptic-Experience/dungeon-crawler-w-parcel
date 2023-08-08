import Phaser from "phaser";

class Game extends Phaser.Scene {
    constructor() {
        super("game")
    }
    preload() {
   

    }
    create() {
   this.add.image(100,100 ,"tiles")
   this.add.image(200,200 ,"tiles2")

        console.log("ENTRO")
     
    }
}

export default Game