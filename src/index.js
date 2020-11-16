import './styles/index.scss';
import Button from './js/button';

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const buttons = [];

function fadeTransition() {
  let alpha = 0;

  function fade() {
    if (alpha < 1) {
      alpha += 0.01;
      ctx.globalAlpha = alpha;
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      requestAnimationFrame(fade);
    }
  }

  fade();
}

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
  const playButton = new Button('play', 30, 30, 80, 30);
  const instructionsButton = new Button('instructions', 30, 70, 80, 30);

  playButton.onClick = () => play();
  instructionsButton.onClick = () => {
    fadeTransition();
    instructions();
  };
  buttons.push(playButton, instructionsButton);

  ctx.fillStyle = 'gray';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  buttons.forEach((button) => {
    return button.draw(ctx);
  });

  requestAnimationFrame(mainMenu);
}

window.addEventListener('load', () => {
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

  buttons.forEach((button) => {
    if (button.clicked(pos) && !!button.onClick) {
      button.onClick();
    }
  });
});
