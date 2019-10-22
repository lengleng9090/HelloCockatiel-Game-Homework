let sky
let mountains
let cloud_lonely
let clouds_BG
let clouds_MG_1
let clouds_MG_2
let clouds_MG_3
let player
let keyA
let keyD
let keyW
class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        })
    }

    preload() {
        this.load.image('sky', 'src/image/sky.png')
        this.load.image('mountains', 'src/image/mountains.png')
        this.load.image('cloud_lonely', 'src/image/cloud_lonely.png')
        this.load.image('clouds_BG', 'src/image/clouds_BG.png')
        this.load.image('clouds_MG_1', 'src/image/clouds_MG_1.png')
        this.load.image('clouds_MG_2', 'src/image/clouds_MG_2.png')
        this.load.image('clouds_MG_3', 'src/image/clouds_MG_3.png')
        this.load.spritesheet('player','src/image/character.png' ,{frameWidth: 416, frameHeight: 454})
    }

    create() {
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        sky = this.add.tileSprite(0, 0, 384, 216, 'sky').setOrigin(0, 0);
        clouds_BG = this.add.tileSprite(384,70, 768, 108, 'clouds_BG');
        mountains = this.add.image(192, 108, 'mountains');
        cloud_lonely = this.add.tileSprite(384,50, 768, 108, 'cloud_lonely');
        clouds_MG_3 = this.add.tileSprite(0,110, 768, 216, 'clouds_MG_3');
        clouds_MG_2 = this.add.tileSprite(0,110, 768, 216, 'clouds_MG_2');
        player = this.physics.add.sprite(200,100,'player').setScale(0.25)
        player.setCollideWorldBounds(true);
        this.anims.create({
            key: 'playerAni',
            frames: this.anims.generateFrameNumbers('player', {
                start: 0,
               end: 3
            }),
           framerate: 10,
            repeat: -1
        })
        clouds_MG_1 = this.add.tileSprite(0,110, 768, 216, 'clouds_MG_1');
        
        

    }

    update() {
        if (keyA.isDown){
            player.setVelocityX(-160);
            player.anims.play('playerAni', true);
        }
        else if (keyD.isDown) {
            player.setVelocityX(160);
            player.anims.play('playerAni', true);
        }
        else{
            player.setVelocityX(0);
            player.anims.play('playerAni', false);
        }
        if (keyW.isDown)
        {
            player.setVelocityY(-330);
        }
        cloud_lonely.tilePositionX += 0.25
        clouds_BG.tilePositionX += 0.25
        clouds_MG_1.tilePositionX += 0.25
        clouds_MG_2.tilePositionX -= 0.25
        clouds_MG_3.tilePositionX += 0.25
            
    }
}

export default GameScene;
