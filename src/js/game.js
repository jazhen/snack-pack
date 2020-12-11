import Assets from './assets';
import Button from './button';

import Avoid from './games/avoid/avoid';
import Fighter from './games/fighter/fighter';
import Locate from './games/locate/locate';

class Game {
  constructor() {
    this.mainMenu = this.mainMenu.bind(this);
    this.instructions = this.instructions.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.assets = new Assets(this.mainMenu);
    this.buttons = {};
  }

  setUpElements() {
    // main menu buttons

    this.addButton('play', [110, 105], [180, 30], () => {
      cancelAnimationFrame(window.requestAnimationFrameId);
      window.gameTransition.animate();
      window.canvas.canvas.removeEventListener(
        'click',
        this.handleClick,
        false
      );
    });

    this.addButton('instructions', [110, 135], [180, 30], () => {
      cancelAnimationFrame(window.requestAnimationFrameId);
      this.instructions();
    });

    this.addButton(
      'back',
      [
        window.canvas.width / (2 * window.canvas.scaleFactor),
        window.canvas.height / (2 * window.canvas.scaleFactor),
      ],
      [100, 50],
      () => {
        cancelAnimationFrame(window.requestAnimationFrameId);
        this.mainMenu();
      }
    );

    // add all games to GameTransition obj for transitions
    window.gameTransition.games.push(new Fighter(), new Locate(), new Avoid());
  }

  addButton(text, pos, size, fn) {
    this.buttons[`${text}Button`] = new Button(
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
      window.canvas.clear();
      window.canvas.drawBackground('#7FCFFA');
      this.buttons.backButton.draw();
    };

    const animate = () => {
      window.requestAnimationFrameId = requestAnimationFrame(animate);
      draw();
    };

    animate();
  }

  handleClick(e) {
    const el = window.canvas.canvas.getBoundingClientRect();
    const mouse = {
      x: e.clientX - el.left,
      y: e.clientY - el.top,
    };

    Object.keys(this.buttons).forEach((key) => {
      const element = this.buttons[key];
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
      window.canvas.drawAnimation(
        window.assets.mainMenuBackground,
        background.size.width * background.frame.x,
        background.size.height * background.frame.y,
        background.size.width,
        background.size.height,
        background.pos.x,
        background.pos.y,
        window.BASE_WIDTH,
        window.BASE_HEIGHT
      );

      this.buttons.playButton.draw();
      this.buttons.instructionsButton.draw();
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
        window.canvas.clear();
        draw.call(this);
        update();
      }
    };

    animate();

    window.canvas.canvas.addEventListener('click', this.handleClick, false);
  }
}

export default Game;
