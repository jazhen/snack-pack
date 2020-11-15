import './styles/index.scss';
import Button from '../js/button';

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

function update() {
  ctx.fillStyle = 'gray';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // game loop
  buttons.forEach((button) => {
    return button.draw(ctx);
  });

  requestAnimationFrame(update);
}

function init() {
  const startGame = new Button('Start Game', 30, 30, 80, 30);

  startGame.onClick = function () {
    console.log(
      `pos: ${this.scaledX}x${this.scaledY}, size:${this.scaledWidth}x${this.scaledHeight}`
    );
  };

  buttons.push(startGame);
  update();
}

window.addEventListener('load', () => {
  init();
  resizeGame();
});

window.addEventListener('resize', () => {
  resizeGame();
});

canvas.addEventListener('click', (e) => {
  // const x = e.pageX - (canvas.clientLeft + canvas.offsetLeft);
  // const y = e.pageY - (canvas.clientTop + canvas.offsetTop);
  const el = canvas.getBoundingClientRect();
  const pos = {
    x: e.clientX - el.left,
    y: e.clientY - el.top,
  };

  buttons.forEach((button) => {
    // debugger;
    if (button.inBounds(pos) && !!button.onClick) {
      button.onClick();
    }
  });
});
