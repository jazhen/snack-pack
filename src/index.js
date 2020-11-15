import './styles/index.scss';

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

  const canvas = document.querySelector('#canvas');
  canvas.width = screenWidth;
  canvas.height = screenHeight;
}

window.onload = resizeGame;

window.addEventListener('resize', () => {
  resizeGame();
});
