import './styles/index.scss';
import Game from './js/game';

// global variables

window.BASE_WIDTH = 400;
window.BASE_HEIGHT = 300;
window.requestAnimationFrameId = null;
const game = new Game();

// event listeners

window.addEventListener(
  'load',
  () => {
    game.assets.load();
    game.setUpElements();
    game.resize();
  },
  false
);

window.addEventListener('resize', game.resize.bind(game), false);

window.addEventListener('orientationchange', game.resize.bind(game), false);
