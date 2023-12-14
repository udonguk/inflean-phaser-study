import Phaser from 'phaser';
import Config from '@/config/Config.js';

export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene) {
    super(scene, Config.width / 2, Config.height / 2, 'player');
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setScale(2, 2);
    this.setBodySize(28, 32);

    this.setDepth(20);
  }
}
