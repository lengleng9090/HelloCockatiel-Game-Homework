import 'phaser';
import GameScene from './scenes/GameScene';

const config = {
    // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
    type: Phaser.WEBGL,
    pixelArt: true,
    roundPixels: true,
    parent: 'content',
    width: 384,
    height: 216,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: {y:1000}
        }
    },
    scene: [
        GameScene
    ]
};

const game = new Phaser.Game(config);