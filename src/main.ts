import * as Phaser from 'phaser';
import * as logoImg from "./assets/logo.png";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: 'Game',
};

export class GameScene extends Phaser.Scene {
  // private square: Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
  // private logo: Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body };
  private logo: Phaser.GameObjects.Sprite;

  constructor() {
    super(sceneConfig);
  }

  public create() {
    this.load.image('logo', logoImg);
    this.logo = this.add.sprite(400,400,'logo');
    this.logo.scaleX = 4;
    this.logo.scaleY = 4;

    // this.logo.anchor.setTo(.5,.5);
    // this.logo = this.add.sprite(400,400,logoImg);
    //this.square = this.add.rectangle(400, 400, 100, 100, 0xFFFFFF) as any;
    //this.physics.add.existing(this.square);
    // this.physics.add.existing(this.logo);
  }

  public update() {

    const cursorKeys = this.input.keyboard.createCursorKeys();

    /*
    if (cursorKeys.up.isDown) {
      this.logo.setVelocityY(-500);
    } else if (cursorKeys.down.isDown) {
      this.logo.body.setVelocityY(500);
    } else {
      this.logo.body.setVelocityY(0);
    }

    if (cursorKeys.right.isDown) {
      this.logo.body.setVelocityX(500);
    } else if (cursorKeys.left.isDown) {
      this.logo.body.setVelocityX(-500);
    } else {
      this.logo.body.setVelocityX(0);
    }

     */
  }
}

const gameConfig: Phaser.Types.Core.GameConfig = {
  title: 'Sample',

  type: Phaser.AUTO,

  scale: {
    width: window.innerWidth,
    height: window.innerHeight,
  },

  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    },
  },

  parent: 'game',
  backgroundColor: '#000000',

  scene: GameScene
};


export const game = new Phaser.Game(gameConfig);
