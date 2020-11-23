import './styles/index.scss';
import Game from './js/game';
import Button from './js/button';

const game = new Game();

// const images = {};
// images.fighter = new Image();
// images.fighter.src = '../../assets/fighter.png';

function resizeGame() {
  const gameWindow = document.querySelector('#main');
  let canvasWidth = window.innerWidth;
  let canvasHeight = window.innerHeight;
  const goalAspectRatio = 4 / 3;
  const currentAspectRatio = canvasWidth / canvasHeight;

  // resize, taking into account screen orientation
  if (currentAspectRatio > goalAspectRatio) {
    canvasWidth = canvasHeight * goalAspectRatio;
    gameWindow.style.height = `${canvasHeight}px`;
    gameWindow.style.width = `${canvasWidth}px`;
  } else {
    canvasHeight = canvasWidth / goalAspectRatio;
    gameWindow.style.width = `${canvasWidth}px`;
    gameWindow.style.height = `${canvasHeight}px`;
  }

  // set margins to center canvas
  gameWindow.style.marginTop = `${-canvasHeight / 2}px`;
  gameWindow.style.marginLeft = `${-canvasWidth / 2}px`;

  // set new canvas size
  game.canvas.canvas.width = canvasWidth;
  game.canvas.canvas.height = canvasHeight;

  // scale all canvas elements to new size
  const scaleFactor = canvasWidth / 400;
  game.canvas.scaleFactor = canvasWidth / 400;
  game.canvas.ctx.scale(scaleFactor, scaleFactor);

  game.elements.forEach((element) => {
    element.setScale(scaleFactor);
  });
}

/* event listeners */

window.addEventListener('load', () => {
  game.loadAssets();
  resizeGame();
  // game.mainMenu();
});

window.addEventListener('resize', () => {
  resizeGame();
});

game.canvas.canvas.addEventListener('click', (e) => {
  const el = game.canvas.canvas.getBoundingClientRect();
  const pos = {
    x: e.clientX - el.left,
    y: e.clientY - el.top,
  };

  game.elements.forEach((element) => {
    if (element instanceof Button) {
      element.mouseDown(pos);
    }
  });
});
