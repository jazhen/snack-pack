import Assets from './assets';
import Button from './button';
import Canvas from './canvas';
import Door from './door';
import Fighter from './fighter';
// import fade from './transitions';

class Game {
  constructor() {
    this.mainMenu = this.mainMenu.bind(this);
    this.play = this.play.bind(this);
    this.instructions = this.instructions.bind(this);

    this.canvas = new Canvas();
    this.assets = new Assets(this.canvas, this.mainMenu);
    this.elements = {};

    this.requestAnimationFrameId = null;
    this.setTimeoutId = null;
  }

  resize() {
    const gameWindow = document.querySelector('#main');
    let newCanvasWidth = window.innerWidth;
    let newCanvasHeight = window.innerHeight;
    const goalAspectRatio = 4 / 3;
    const currentAspectRatio = newCanvasWidth / newCanvasHeight;

    // resize, taking into account screen orientation
    if (currentAspectRatio > goalAspectRatio) {
      // window width is longer than desired game width
      newCanvasWidth = newCanvasHeight * goalAspectRatio;
      gameWindow.style.height = `${newCanvasHeight}px`;
      gameWindow.style.width = `${newCanvasWidth}px`;
    } else {
      // window height is taller than desired game height
      newCanvasHeight = newCanvasWidth / goalAspectRatio;
      gameWindow.style.width = `${newCanvasWidth}px`;
      gameWindow.style.height = `${newCanvasHeight}px`;
    }

    // set margins to center canvas
    gameWindow.style.marginTop = `${-newCanvasHeight / 2}px`;
    gameWindow.style.marginLeft = `${-newCanvasWidth / 2}px`;

    // set new canvas size
    this.canvas.canvas.width = newCanvasWidth;
    this.canvas.canvas.height = newCanvasHeight;

    // scale all canvas elements to new size
    // this.canvas.scaleFactor = newCanvasWidth / 4;
    this.canvas.scaleFactor = newCanvasWidth / 400;
    this.canvas.scale();
  }

  setUpElements() {
    this.addButton('play', [0, 0], [100, 50], () => {
      cancelAnimationFrame(this.requestAnimationFrameId);
      this.play();
      // fade();
    });

    this.addButton('instructions', [0, 100], [100, 50], () => {
      cancelAnimationFrame(this.requestAnimationFrameId);
      this.instructions();
      // fade();
    });

    this.addButton(
      'back',
      [
        this.canvas.canvas.width / (2 * this.canvas.scaleFactor),
        this.canvas.canvas.height / (2 * this.canvas.scaleFactor),
      ],
      [100, 50],
      () => {
        cancelAnimationFrame(this.requestAnimationFrameId);
        this.mainMenu();
      }
    );

    this.elements.door = new Door(this.canvas, this.assets.assets);
    this.elements.fighter = new Fighter(this.canvas, this.assets.assets);
  }

  addButton(text, pos, size, fn) {
    this.elements[text] = new Button(
      this.canvas,
      text,
      pos[0],
      pos[1],
      size[0],
      size[1],
      fn
    );
  }

  instructions() {
    function draw() {
      this.canvas.clear();
      this.canvas.drawBackground('blue');
      this.elements.back.draw();
    }

    function animate() {
      draw.call(this);
      this.requestAnimationFrameId = requestAnimationFrame(animate.bind(this));
    }

    animate.call(this);
  }

  mainMenu() {
    function draw() {
      this.canvas.clear();
      this.canvas.drawBackground('orange');
      this.elements.play.draw();
      this.elements.instructions.draw();
    }

    function animate() {
      draw.call(this);
      this.requestAnimationFrameId = requestAnimationFrame(animate.bind(this));
    }

    animate.call(this);
  }

  play() {
    this.elements.door.animate(this.elements.fighter.animate);
    // this.elements.fighter.animate();
  }
}

export default Game;
