import './styles/index.scss';
import Game from './js/game';
import Button from './js/button';

// global variables

const game = new Game();

// event listeners

window.addEventListener('load', () => {
  game.assets.load();
  game.resize();
});

window.addEventListener('resize', game.resize.bind(game), false);

window.addEventListener('orientationchange', game.resize.bind(game), false);

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
