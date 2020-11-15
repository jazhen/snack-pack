import './styles/index.scss';

// let canvas;
// let context;

// let secondsPassed;
// let oldTimeStamp;
// let fps;

// function draw() {
//   const randomColor = Math.random() > 0.5 ? '#ff8080' : '#0099b0';
//   context.fillStyle = randomColor;
//   context.fillRect(100, 50, 200, 175);
// }

// function gameLoop(timeStamp) {
//   // Calculate the number of seconds passed since the last frame
//   secondsPassed = (timeStamp - oldTimeStamp) / 1000;
//   oldTimeStamp = timeStamp;

//   // Calculate fps
//   fps = Math.round(1 / secondsPassed);

//   // Draw number to the screen
//   context.fillStyle = 'white';
//   context.fillRect(0, 0, 200, 100);
//   context.font = '25px Arial';
//   context.fillStyle = 'black';
//   context.fillText(`FPS: ${fps}`, 10, 30);

//   // Perform the drawing operation
//   draw();

//   // The loop function has reached it's end. Keep requesting new frames
//   window.requestAnimationFrame(gameLoop);
// }

// function init() {
//   canvas = document.getElementById('canvas');
//   context = canvas.getContext('2d');

//   // Start the first frame request
//   // window.requestAnimationFrame(gameLoop);
// }

const main = document.getElementById('main');
/**
 * Hide element
 */
function hide(el) {
  el.style.display = 'hide';
}
/**
 * Show element
 */
function show(el) {
  el.style.display = 'block';
}
/**
 * Show the main menu after loading all assets
 */
function mainMenu() {
  show(main);
}

/**
 * Click handlers for the different menu screens
 */
document.querySelectorAll('.play')[0].addEventListener('click', function () {
  hide(main);
  // startGame();
  // window.requestAnimationFrame(gameLoop);
});

window.onload = mainMenu();
// window.onload = init;
