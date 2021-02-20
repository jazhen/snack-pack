import Assets from './assets';
import Button from './button';
import ClickableImage from './clickable_image';

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
      if (element instanceof Button || element instanceof ClickableImage) {
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
      [(window.canvas.width - 80) / 2, 225],
      [80, 30],
      () => {
        this.showInstructions = false;
      }
    );

    this.buttons.speaker = new ClickableImage(
      window.assets.speaker,
      370,
      5,
      window.canvas.baseFontSize * 1.5,
      window.canvas.baseFontSize * 1.5,
      () => {
        if (window.audio.paused) {
          window.audio.play();
        } else {
          window.audio.pause();
          window.audio.currentTime = 0;
        }
      }
    );

    this.buttons.github = new ClickableImage(
      window.assets.github,
      window.BASE_WIDTH / 2 - 45,
      270,
      window.canvas.baseFontSize * 1.5,
      window.canvas.baseFontSize * 1.5,
      () => {
        window.open('https://github.com/jazhen', '_blank');
      }
    );

    this.buttons.linkedin = new ClickableImage(
      window.assets.linkedin,
      window.BASE_WIDTH / 2 - 10,
      270,
      window.canvas.baseFontSize * 1.5,
      window.canvas.baseFontSize * 1.5,
      () => {
        window.open('https://www.linkedin.com/in/jazhen/', '_blank');
      }
    );

    this.buttons.angelist = new ClickableImage(
      window.assets.angelist,
      window.BASE_WIDTH / 2 + 23,
      270,
      window.canvas.baseFontSize * 1.5,
      window.canvas.baseFontSize * 1.5,
      () => {
        window.open('https://angel.co/u/jazhen', '_blank');
      }
    );
  }

  instructions() {
    window.canvas.drawText(
      'play through a rotating, random',
      window.canvas.width / 2,
      70 * window.canvas.scaleFactor,
      window.canvas.baseFontSize * 0.75,
      'white',
      'black',
      window.canvas.width
    );

    window.canvas.drawText(
      'assortment of minigames.',
      window.canvas.width / 2,
      90 * window.canvas.scaleFactor,
      window.canvas.baseFontSize * 0.75,
      'white',
      'black',
      window.canvas.width
    );

    window.canvas.drawText(
      'act fast! beat each round',
      window.canvas.width / 2,
      120 * window.canvas.scaleFactor,
      window.canvas.baseFontSize * 0.75,
      'white',
      'black',
      window.canvas.width
    );

    window.canvas.drawText(
      'before time runs out.',
      window.canvas.width / 2,
      135 * window.canvas.scaleFactor,
      window.canvas.baseFontSize * 0.75,
      'white',
      'black',
      window.canvas.width
    );

    window.canvas.drawText(
      'WASD to move.',
      window.canvas.width / 2,
      165 * window.canvas.scaleFactor,
      window.canvas.baseFontSize * 0.75,
      'white',
      'black',
      window.canvas.width
    );

    window.canvas.drawText(
      'SPACEBAR is the action button.',
      window.canvas.width / 2,
      180 * window.canvas.scaleFactor,
      window.canvas.baseFontSize * 0.75,
      'white',
      'black',
      window.canvas.width
    );

    window.canvas.drawText(
      'MOUSE CLICK to select.',
      window.canvas.width / 2,
      195 * window.canvas.scaleFactor,
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

      const gradient = window.canvas.ctx.createLinearGradient(0, 5, 0, 45);
      gradient.addColorStop('0', 'black');
      gradient.addColorStop('0.01', 'red');
      gradient.addColorStop('1.00', 'gold');

      window.canvas.drawText(
        'SNACK PACK',
        window.canvas.width / 2,
        30 * window.canvas.scaleFactor,
        window.canvas.baseFontSize * 2,
        gradient,
        'black',
        window.canvas.width
      );

      if (this.showInstructions) {
        this.instructions();
      } else {
        this.buttons.playButton.draw();
        this.buttons.instructionsButton.draw();
        this.buttons.github.draw();
        this.buttons.linkedin.draw();
        this.buttons.angelist.draw();
      }

      if (window.audio.paused) {
        this.buttons.speaker.image = window.assets.mute;
      } else {
        this.buttons.speaker.image = window.assets.speaker;
      }

      this.buttons.speaker.draw();
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
