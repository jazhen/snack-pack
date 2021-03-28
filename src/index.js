import './styles/index.scss';
import Game from './js/game';
import Canvas from './js/canvas';
import GameTransition from './js/transitions/game_transition';
import LoseTransition from './js/transitions/lose_transition';
import Fighter from './js/games/fighter/fighter';
import Locate from './js/games/locate/locate';
import Avoid from './js/games/avoid/avoid';

// global variables
const game = new Game();

window.requestAnimationFrameId = null;
window.ROUND_NUM = 0;
window.assets = {};
window.canvas = new Canvas();
window.gameTransition = new GameTransition();
window.gameTransition.games.push(new Fighter(), new Locate(), new Avoid());
window.loseTransition = new LoseTransition(game.mainMenu);

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
