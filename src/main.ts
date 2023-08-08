import Phaser, { Scene } from "phaser";
// import TittleScreen from "./scenes/TittleScene";
import Game from "./scenes/Game";
import Preloader from "./scenes/Preloader";
const config = {
    type: Phaser.AUTO,
    width: "100%",
    height: "100%",
    parent: "game-container",
    scale: {
        mode: window.Phaser.Scale.FIT
    },
    scene: [Preloader,Game],
    physics: {
        default: "arcade",
        arcade: {
            // overlapBias: 1000,
            gravity: { y: 0 },
            debug: false
        }
    }
}
const game = new Phaser.Game(config)
