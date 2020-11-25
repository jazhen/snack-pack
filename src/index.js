import './styles/index.scss';
import Game from './js/game';
import Button from './js/button';

// global variables

const game = new Game();

// event listeners

window.addEventListener('load', () => {
  game.assets.load();
  game.setUpElements();
  game.resize();
});

window.addEventListener('resize', game.resize.bind(game), false);

window.addEventListener('orientationchange', game.resize.bind(game), false);

game.canvas.canvas.addEventListener('click', (e) => {
  const el = game.canvas.canvas.getBoundingClientRect();
  const mouse = {
    x: e.clientX - el.left,
    y: e.clientY - el.top,
  };

  Object.keys(game.elements).forEach((key) => {
    const element = game.elements[key];
    if (element instanceof Button) {
      element.mouseDown(mouse);
    }
  });
});
