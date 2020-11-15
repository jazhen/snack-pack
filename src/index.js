import './styles/index.scss';
import Button from '../js/button';

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const buttons = [];

function resizeGame() {
  const gameArea = document.querySelector('#main');
  const goalAspectRatio = 4 / 3;
  let screenWidth = window.innerWidth;
  let screenHeight = window.innerHeight;
  const currentAspectRatio = screenWidth / screenHeight;

  if (currentAspectRatio > goalAspectRatio) {
    screenWidth = screenHeight * goalAspectRatio;
    gameArea.style.height = `${screenHeight}px`;
    gameArea.style.width = `${screenWidth}px`;
  } else {
    screenHeight = screenWidth / goalAspectRatio;
    gameArea.style.width = `${screenWidth}px`;
    gameArea.style.height = `${screenHeight}px`;
  }

  gameArea.style.marginTop = `${-screenHeight / 2}px`;
  gameArea.style.marginLeft = `${-screenWidth / 2}px`;

  canvas.width = screenWidth;
  canvas.height = screenHeight;

  buttons.forEach((button) => {
    button.resize(ctx);
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
  const startGame = new Button(
    'Start Game',
    10,
    10,
    canvas.width * 0.3,
    canvas.height * 0.2
  );

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

canvas.addEventListener('click', () => {
  buttons.forEach((button) => {
    button.onClick();
  });
});
