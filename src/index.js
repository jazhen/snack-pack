import './styles/index.scss';
import Game from './js/game';
import Canvas from './js/canvas';
import GameTransition from './js/transitions/game_transition';
import LoseTransition from './js/transitions/lose_transition';

// global variables
const game = new Game();

window.requestAnimationFrameId = null;
window.BASE_WIDTH = 400;
window.BASE_HEIGHT = 300;
window.assets = {};
window.canvas = new Canvas();
window.gameTransition = new GameTransition();
window.loseTransition = new LoseTransition(game.mainMenu);

const resize = () => {
  const gameWindow = document.querySelector('#main');
  let newCanvasWidth = window.innerWidth;
  let newCanvasHeight = window.innerHeight;
  const goalAspectRatio = 4 / 3;
  const currentAspectRatio = newCanvasWidth / newCanvasHeight;

  // resize, taking into account screen orientation
  if (currentAspectRatio > goalAspectRatio) {
    // window width is longer than desired game width
    newCanvasWidth = newCanvasHeight * goalAspectRatio;
    gameWindow.style.height = `${newCanvasHeight}px`;
    gameWindow.style.width = `${newCanvasWidth}px`;
  } else {
    // window height is taller than desired game height
    newCanvasHeight = newCanvasWidth / goalAspectRatio;
    gameWindow.style.width = `${newCanvasWidth}px`;
    gameWindow.style.height = `${newCanvasHeight}px`;
  }

  // set margins to center canvas
  gameWindow.style.marginTop = `${-newCanvasHeight / 2}px`;
  gameWindow.style.marginLeft = `${-newCanvasWidth / 2}px`;

  // set new canvas size
  window.canvas.width = newCanvasWidth;
  window.canvas.height = newCanvasHeight;
  window.canvas.canvas.width = newCanvasWidth;
  window.canvas.canvas.height = newCanvasHeight;

  // scale all canvas elements to new size
  window.canvas.scaleFactor = newCanvasWidth / window.BASE_WIDTH;
  window.canvas.scale();
};

// event listeners

window.addEventListener(
  'load',
  () => {
    game.assets.load();
    game.setUpElements();
    resize();
  },
  false
);

window.addEventListener('resize', resize, false);

window.addEventListener('orientationchange', resize, false);
