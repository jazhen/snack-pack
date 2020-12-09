import Assets from './assets';
import Button from './button';
import Canvas from './canvas';
import Door from './door';
import Fighter from './fighter';
import Locate from './locate/locate';
// import fade from './transitions';

class Game {
  constructor() {
    this.mainMenu = this.mainMenu.bind(this);
    this.startGame = this.startGame.bind(this);
    this.instructions = this.instructions.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.canvas = new Canvas();
    this.assets = new Assets(this.canvas, this.mainMenu);
    this.elements = {};
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
    this.canvas.scaleFactor = newCanvasWidth / 400;
    // this.canvas.scaleFactor = newCanvasWidth / 400;
    this.canvas.scale();
  }

  setUpElements() {
    // main menu buttons

    this.addButton('play', [0, 0], [100, 50], () => {
      cancelAnimationFrame(window.requestAnimationFrameId);
      this.startGame();
      this.canvas.canvas.removeEventListener('click', this.handleClick, false);
      // fade();
    });

    this.addButton('instructions', [0, 100], [100, 50], () => {
      cancelAnimationFrame(window.requestAnimationFrameId);
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
        cancelAnimationFrame(window.requestAnimationFrameId);
        this.mainMenu();
      }
    );

    // game elements
    this.elements.door = new Door(this.canvas, this.assets.assets);

    this.elements.fighter = new Fighter(
      this.canvas,
      this.elements.door,
      this.assets.assets
    );

    this.elements.locate = new Locate(
      this.canvas,
      this.elements.door,
      this.assets.assets
    );

    // add all games to Door obj for transitions
    // this.elements.door.games.push(this.elements.locate);

    this.elements.door.games.push(this.elements.fighter, this.elements.locate);
  }

  addButton(text, pos, size, fn) {
    this.elements[`${text}Button`] = new Button(
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
    const draw = () => {
      this.canvas.clear();
      this.canvas.drawBackground('#7FCFFA');
      this.elements.backButton.draw();
    };

    const animate = () => {
      draw();
      window.requestAnimationFrameId = requestAnimationFrame(animate);
    };

    animate();
  }

  handleClick(e) {
    const el = this.canvas.canvas.getBoundingClientRect();
    const mouse = {
      x: e.clientX - el.left,
      y: e.clientY - el.top,
    };

    Object.keys(this.elements).forEach((key) => {
      const element = this.elements[key];
      if (element instanceof Button) {
        element.mouseDown(mouse);
      }
    });
  }

  mainMenu() {
    const draw = () => {
      this.canvas.clear();
      this.canvas.drawBackground('orange');
      this.elements.playButton.draw();
      this.elements.instructionsButton.draw();
    };

    const animate = () => {
      draw();
      window.requestAnimationFrameId = requestAnimationFrame(animate);
    };

    animate();

    this.canvas.canvas.addEventListener('click', this.handleClick, false);
  }

  startGame() {
    this.elements.door.animate();
  }
}

export default Game;
