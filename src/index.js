import './styles/index.scss';
import Game from './js/game';
import Button from './js/button';

const game = new Game();

function resizeGame() {
  const gameWindow = document.querySelector('#main');
  let cw = window.innerWidth;
  let ch = window.innerHeight;
  const goalAspectRatio = 4 / 3;
  const currentAspectRatio = cw / ch;

  // resize, taking into account screen orientation
  if (currentAspectRatio > goalAspectRatio) {
    cw = ch * goalAspectRatio;
    gameWindow.style.height = `${ch}px`;
    gameWindow.style.width = `${cw}px`;
  } else {
    ch = cw / goalAspectRatio;
    gameWindow.style.width = `${cw}px`;
    gameWindow.style.height = `${ch}px`;
  }

  // set margins to center canvas
  gameWindow.style.marginTop = `${-ch / 2}px`;
  gameWindow.style.marginLeft = `${-cw / 2}px`;

  // set new canvas size
  game.canvas.canvas.width = cw;
  game.canvas.canvas.height = ch;

  // scale all canvas elements to new size
  const scaleFactor = cw / 400;
  game.canvas.scaleFactor = cw / 400;
  game.canvas.ctx.scale(scaleFactor, scaleFactor);

  game.elements.forEach((element) => {
    element.setScale(scaleFactor);
  });
}

/* event listeners */

window.addEventListener('load', () => {
  game.mainMenu();
  resizeGame();
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
