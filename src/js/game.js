import Button from './button';
import Canvas from './canvas';
import Door from './door';
// import Fighter from './fighter';
import fade from './transitions';

class Game {
  constructor() {
    this.canvas = new Canvas();
    this.elements = [];
    this.assets = {};
    this.requestId = null;
    this.timeoutId = null;

    this.mainMenu = this.mainMenu.bind(this);
    this.play = this.play.bind(this);
    this.instructions = this.instructions.bind(this);
  }

  loadAssets() {
    const filenames = ['fighter', 'door'];

    filenames.forEach((filename) => {
      this.assets[filename] = new Image();
      this.assets[filename].onload = () => {
        console.log(`${filename}.png loaded`);
      };
      this.assets[filename].src = `../assets/${filename}.png`;
    });

    this.mainMenu();
  }

  resize() {
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
    this.canvas.canvas.width = canvasWidth;
    this.canvas.canvas.height = canvasHeight;

    // scale all canvas elements to new size
    // const scaleFactor = canvasWidth / 400;
    // this.canvas.scaleFactor = canvasWidth / 400;
    // this.canvas.ctx.scale(this.canvas.scaleFactor, this.canvas.scaleFactor);
    // this.canvas.ctx.scale(scaleFactor, scaleFactor);

    // this.elements.forEach((element) => {
    //   element.setScale(scaleFactor);
    // });
  }

  clearElements() {
    this.elements = [];
  }

  addButton(text, pos, size, fn, fx) {
    this.elements.push(
      new Button(text, pos[0], pos[1], size[0], size[1], () => {
        fx();
        fn();
      })
    );
  }

  draw() {
    this.elements.forEach((element) =>
      element.draw(this.canvas.ctx, this.assets)
    );
  }

  animate(bgColor, text) {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    const fps = 2;

    function animate() {
      this.timeoutId = setTimeout(() => {
        this.canvas.clearCanvas();
        this.canvas.drawBackground(bgColor);

        if (text) {
          this.canvas.drawText(text, [
            this.canvas.canvas.width / 4,
            this.canvas.canvas.height / 4,
          ]);
        }

        this.draw();
        this.requestId = requestAnimationFrame(animate);
        console.log(this.requestId);
      }, 1000 / fps);
    }

    // eslint-disable-next-line no-func-assign
    animate = animate.bind(this);
    animate();
  }

  instructions() {
    this.clearElements();
    this.addButton('back', [30, 70], [80, 30], this.mainMenu, fade);
    this.animate('blue', 'instructions go here');
  }

  mainMenu() {
    this.clearElements();
    this.addButton('play', [30, 30], [80, 30], this.play, fade);
    this.addButton('instructions', [30, 70], [80, 30], this.instructions, fade);
    this.animate('yellow');
  }

  play() {
    this.clearElements();
    this.addButton('back', [30, 70], [80, 30], this.mainMenu, fade);
    // this.elements.push(new Fighter());
    this.elements.push(new Door());
    this.animate('green', 'playing game');
  }
}

export default Game;
