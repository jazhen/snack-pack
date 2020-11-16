import './styles/index.scss';
import Button from './js/button';
import fade from './js/transitions';

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const buttons = [];

function resizeGame() {
  const gameArea = document.querySelector('#main');
  let cw = window.innerWidth;
  let ch = window.innerHeight;
  const goalAspectRatio = 4 / 3;
  const currentAspectRatio = cw / ch;

  // resize, taking into account screen orientation
  if (currentAspectRatio > goalAspectRatio) {
    cw = ch * goalAspectRatio;
    gameArea.style.height = `${ch}px`;
    gameArea.style.width = `${cw}px`;
  } else {
    ch = cw / goalAspectRatio;
    gameArea.style.width = `${cw}px`;
    gameArea.style.height = `${ch}px`;
  }

  // set margins to center canvas
  gameArea.style.marginTop = `${-ch / 2}px`;
  gameArea.style.marginLeft = `${-cw / 2}px`;

  // set new canvas size
  canvas.width = cw;
  canvas.height = ch;

  // scale all canvas elements to new size
  const scaleFactor = cw / 400;
  ctx.scale(scaleFactor, scaleFactor);

  buttons.forEach((button) => {
    button.setScale(scaleFactor);
  });
}

function play() {
  ctx.fillStyle = 'green';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  requestAnimationFrame(play);
}

function instructions() {
  ctx.fillStyle = 'aqua';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'black';
  ctx.fillText(
    'hello world',
    canvas.width / 2,
    canvas.height / 2,
    canvas.width
  );

  requestAnimationFrame(instructions);
}

function mainMenu() {
  ctx.fillStyle = 'gray';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  buttons.forEach((button) => {
    return button.draw(ctx);
  });

  requestAnimationFrame(mainMenu);
}

window.addEventListener('load', () => {
  buttons.push(
    new Button('play', 30, 30, 80, 30, () => {
      fade();
      play();
    })
  );

  buttons.push(
    new Button('instructions', 30, 70, 80, 30, () => {
      fade();
      instructions();
    })
  );

  mainMenu();
  resizeGame();
});

window.addEventListener('resize', () => {
  resizeGame();
});

canvas.addEventListener('click', (e) => {
  const el = canvas.getBoundingClientRect();
  const pos = {
    x: e.clientX - el.left,
    y: e.clientY - el.top,
  };

  buttons.forEach((button) => button.mouseDown(pos));
});
