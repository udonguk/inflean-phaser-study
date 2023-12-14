import LoadingScene from '@/scene/LoadingScene.js';
import PlayingScene from '@/scene/PlayingScene.js';

const Config = {
  width: 800,
  height: 600,
  backgroundColor: 0x000000,
  scene: [LoadingScene, PlayingScene],
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    },
  },
};

export default Config;
