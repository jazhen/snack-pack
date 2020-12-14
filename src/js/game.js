import Assets from './assets';
import Button from './button';

class Game {
  constructor() {
    this.mainMenu = this.mainMenu.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.assets = new Assets(this.mainMenu);
    this.buttons = {};

    this.showInstructions = false;
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

  setUpElements() {
    this.addButton('play', [110, 105], [180, 30], () => {
      cancelAnimationFrame(window.requestAnimationFrameId);
      window.ROUND_NUM = 0;
      window.gameTransition.animate();
      window.canvas.canvas.removeEventListener(
        'click',
        this.handleClick,
        false
      );
    });

    this.addButton('instructions', [110, 135], [180, 30], () => {
      this.showInstructions = true;
    });

    this.addButton(
      'back',
      [(window.canvas.width - 80) / 2, window.canvas.baseFontSize * 15],
      [80, 30],
      () => {
        this.showInstructions = false;
      }
    );
  }

  instructions() {
    window.canvas.drawText(
      'play through a rotating, random',
      window.canvas.width / 2,
      60 * window.canvas.scaleFactor,
      window.canvas.baseFontSize * 0.75,
      'white',
      'black',
      window.canvas.width
    );

    window.canvas.drawText(
      'assortment of microgames.',
      window.canvas.width / 2,
      80 * window.canvas.scaleFactor,
      window.canvas.baseFontSize * 0.75,
      'white',
      'black',
      window.canvas.width
    );

    window.canvas.drawText(
      'wasd to move.',
      window.canvas.width / 2,
      120 * window.canvas.scaleFactor,
      window.canvas.baseFontSize * 0.75,
      'white',
      'black',
      window.canvas.width
    );

    window.canvas.drawText(
      'spacebar as the action button.',
      window.canvas.width / 2,
      140 * window.canvas.scaleFactor,
      window.canvas.baseFontSize * 0.75,
      'white',
      'black',
      window.canvas.width
    );

    window.canvas.drawText(
      'mouse to select.',
      window.canvas.width / 2,
      160 * window.canvas.scaleFactor,
      window.canvas.baseFontSize * 0.75,
      'white',
      'black',
      window.canvas.width
    );

    this.buttons.backButton.draw();
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

      if (this.showInstructions) {
        this.instructions();
      } else {
        this.buttons.playButton.draw();
        this.buttons.instructionsButton.draw();
      }
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
