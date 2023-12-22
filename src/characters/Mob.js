import Phaser from 'phaser';

export default class Mob extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture, animKey, initHp, dropRate) {
    super(scene, x, y, texture);
    scene.add.existing(this);
    scene.physics.add.existing(this); // todo api 확인해보자

    this.play(animKey);
    this.setDepth(10);
    this.scale = 2;

    this.m_speed = 50;
    this.m_hp = initHp;
    this.m_dropRate = dropRate;

    switch (texture) {
      case 'mob1':
        this.setBodySize(24, 14, false);
        this.setOffset(0, 14);
        break;
      case 'mob2':
        this.setBodySize(24, 32);
        break;
      case 'mob3':
        this.setBodySize(24, 32);
        break;
      case 'mob4':
        this.setBodySize(24, 32);
        break;
      case 'lion':
        this.setBodySize(40, 64);
        break;
      default:
        this.setBodySize(24, 32);
        break;
    }

    // Mob이 계속해서 player 방향으로 움직이도록 해준다.
    this.m_events = [];
    this.m_events.push(
      this.scene.time.addEvent({
        delay: 100,
        callback: () => {
          scene.physics.moveToObject(this, scene.m_player, this.m_speed);
        },
        loop: true,
      }),
    );

    scene.events.on('update', (time, delta) => {
      this.update(time, delta);
    });
  }

  update() {
    if (!this.body) return;

    this.flipX = this.x < this.scene.m_player.x;
  }
}
