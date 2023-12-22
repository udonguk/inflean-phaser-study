/* eslint no-underscore-dangle: 0 */
import Config from '@/config/Config.js';

export default function getRandomPosition(x, y) {
  const randRad = Math.random() * Math.PI * 2;
  const _r = Math.sqrt(Config.width * Config.width + Config.height * Config.height) / 2;
  const _x = x + _r * Math.cos(randRad);
  const _y = y + _r * Math.sin(randRad);
  return [_x, _y];
}
