import Assets from './assets';
import Avoid from './avoid/avoid';
import Button from './button';
import Door from './door';
import Fighter from './fighter';
import Locate from './locate/locate';
import LoseTransition from './lose';

class Game {
  constructor() {
    this.mainMenu = this.mainMenu.bind(this);
    this.startGame = this.startGame.bind(this);
    this.instructions = this.instructions.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.assets = new Assets(this.mainMenu);
    this.elements = {};
  }

  setUpElements() {
    // main menu buttons

    this.addButton('play', [110, 105], [180, 30], () => {
      cancelAnimationFrame(window.requestAnimationFrameId);
      this.startGame();
      window.CANVAS.canvas.removeEventListener(
        'click',
        this.handleClick,
        false
      );
      // fade();
    });

    this.addButton('instructions', [110, 135], [180, 30], () => {
      cancelAnimationFrame(window.requestAnimationFrameId);
      this.instructions();
      // fade();
    });

    this.addButton(
      'back',
      [
        window.CANVAS.width / (2 * window.CANVAS.scaleFactor),
        window.CANVAS.height / (2 * window.CANVAS.scaleFactor),
      ],
      [100, 50],
      () => {
        cancelAnimationFrame(window.requestAnimationFrameId);
        this.mainMenu();
      }
    );

    // game elements
    this.elements.door = new Door(this.assets.assets);
    this.elements.loseTransition = new LoseTransition(
      this.mainMenu,
      this.assets.assets
    );

    this.elements.fighter = new Fighter(
      this.elements.door,
      this.elements.loseTransition,
      this.assets.assets
    );

    this.elements.locate = new Locate(
      this.elements.door,
      this.elements.loseTransition,
      this.assets.assets
    );

    this.elements.avoid = new Avoid(
      this.elements.door,
      this.elements.loseTransition
    );

    // add all games to Door obj for transitions
    // this.elements.door.games.push(this.elements.avoid);

    this.elements.door.games.push(
      this.elements.fighter,
      this.elements.locate,
      this.elements.avoid
    );
  }

  addButton(text, pos, size, fn) {
    this.elements[`${text}Button`] = new Button(
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
      window.CANVAS.clear();
      window.CANVAS.drawBackground('#7FCFFA');
      this.elements.backButton.draw();
    };

    const animate = () => {
      draw();
      window.requestAnimationFrameId = requestAnimationFrame(animate);
    };

    animate();
  }

  handleClick(e) {
    const el = window.CANVAS.canvas.getBoundingClientRect();
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
    const background = {
      size: {
        width: 511,
        height: 384,
      },
      pos: {
        x: 0,
        y: 0,
      },
      frame: {
        x: 0,
        y: 0,
        min: 0,
        max: 23,
      },
    };

    const draw = () => {
      window.CANVAS.drawAnimation(
        this.assets.assets.mainMenuBackground,
        background.size.width * background.frame.x,
        background.size.height * background.frame.y,
        background.size.width,
        background.size.height,
        background.pos.x,
        background.pos.y,
        window.BASE_WIDTH,
        window.BASE_HEIGHT
      );

      this.elements.playButton.draw();
      this.elements.instructionsButton.draw();
    };

    const update = () => {
      if (background.frame.x < background.frame.max) {
        background.frame.x += 1;
      } else {
        background.frame.x = background.frame.min;
      }
    };

    const fps = 24;
    const fpsInterval = 1000 / fps;
    let lastDrawTime = performance.now();

    const animate = () => {
      window.requestAnimationFrameId = requestAnimationFrame(animate);
      const currentTime = performance.now();
      const timeSinceLastDraw = currentTime - lastDrawTime;

      if (timeSinceLastDraw > fpsInterval) {
        lastDrawTime = currentTime - (timeSinceLastDraw % fpsInterval);
        window.CANVAS.clear();
        draw.call(this);
        update();
      }
    };

    animate();

    window.CANVAS.canvas.addEventListener('click', this.handleClick, false);
  }

  startGame() {
    this.elements.door.animate();
  }
}

export default Game;
