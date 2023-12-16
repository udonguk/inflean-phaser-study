import Config from '@/config/Config.js';

/**
 * scene의 배경화면을 설저하는 함수
 */
export default function setBackground(scene, backgroundTexture) {
  // eslint-disable-next-line no-param-reassign
  scene.m_background = scene.add.tileSprite(0, 0, Config.width, Config.height, backgroundTexture)
    .setOrigin(0, 0);
}
