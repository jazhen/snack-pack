import Assets from './assets';
import TextButton from './button/text_button';
import ImageButton from './button/image_button';
import openUrlInNewTab from './misc';
import Mouse from './mouse';
import { COLOR, FONT, SIZE } from './constants';

const URLS = {
  GITHUB: 'https://github.com/jazhen',
  LINKEDIN: 'https://www.linkedin.com/in/jazhen',
  ANGELLIST: 'https://angel.co/u/jazhen',
};

const GOAL_ASPECT_RATIO = 4 / 3;

class Game {
  #instructionsWasClicked = false;
  #audio = document.querySelector('#audio');

  constructor() {
    this.mainMenu = this.mainMenu.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.window = document.querySelector('#main');

    this.assets = new Assets(this.mainMenu);
    this.buttons = {};
  }

  resize() {
    let newCanvasWidth = window.innerWidth;
    let newCanvasHeight = window.innerHeight;
    const currentAspectRatio = newCanvasWidth / newCanvasHeight;

    // resize, taking into account screen orientation
    if (currentAspectRatio > GOAL_ASPECT_RATIO) {
      // window width is longer than desired game width
      newCanvasWidth = newCanvasHeight * GOAL_ASPECT_RATIO;
      this.window.style.width = `${newCanvasWidth}px`;
    } else {
      // window height is taller than desired game height
      newCanvasHeight = newCanvasWidth / GOAL_ASPECT_RATIO;
      this.window.style.height = `${newCanvasHeight}px`;
    }

    // set margins to center canvas
    this.window.style.marginTop = `${-newCanvasHeight / 2}px`;
    this.window.style.marginLeft = `${-newCanvasWidth / 2}px`;

    // set new canvas size
    window.canvas.width = newCanvasWidth;
    window.canvas.height = newCanvasHeight;
    window.canvas.canvas.width = newCanvasWidth;
    window.canvas.canvas.height = newCanvasHeight;

    // scale all canvas elements to new size
    window.canvas.scaleFactor = newCanvasWidth / SIZE.BASE_WIDTH;
    window.canvas.scale();
  }

  handleClick(e) {
    const mouseCoord = Mouse.getCoord(e);
    const foundClickedButton = Object.keys(this.buttons).find((name) =>
      this.buttons[name].isClicked(mouseCoord)
    );

    if (foundClickedButton !== undefined) {
      this.buttons[foundClickedButton].fn();
    }
  }

  addButton(text, pos, size, fn) {
    this.buttons[`${text}Button`] = new TextButton(
      pos[0],
      pos[1],
      size[0],
      size[1],
      fn,
      text
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

    this.addButton('instructions', [110, 135], [180, 30], () =>
      this.#toggleInstructions()
    );

    this.addButton('back', [(SIZE.BASE_WIDTH - 80) / 2, 225], [80, 30], () =>
      this.#toggleInstructions()
    );

    this.buttons.speaker = new ImageButton(
      370,
      5,
      window.canvas.baseFontSize * 1.5,
      window.canvas.baseFontSize * 1.5,
      () => {
        if (this.#audio.paused) {
          this.#audio.play();
        } else {
          this.#audio.pause();
          this.#audio.currentTime = 0;
        }
      },
      window.assets.speaker
    );

    this.buttons.github = new ImageButton(
      SIZE.HALF_BASE_WIDTH - 45,
      270,
      window.canvas.baseFontSize * 1.5,
      window.canvas.baseFontSize * 1.5,
      () => openUrlInNewTab(URLS.GITHUB),
      window.assets.github
    );

    this.buttons.linkedin = new ImageButton(
      SIZE.HALF_BASE_WIDTH - 10,
      270,
      window.canvas.baseFontSize * 1.5,
      window.canvas.baseFontSize * 1.5,
      () => openUrlInNewTab(URLS.LINKEDIN),
      window.assets.linkedin
    );

    this.buttons.angelist = new ImageButton(
      SIZE.HALF_BASE_WIDTH + 23,
      270,
      window.canvas.baseFontSize * 1.5,
      window.canvas.baseFontSize * 1.5,
      () => openUrlInNewTab(URLS.ANGELLIST),
      window.assets.angelist
    );
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
        SIZE.BASE_WIDTH,
        SIZE.BASE_HEIGHT
      );

      const gradient = window.canvas.ctx.createLinearGradient(0, 5, 0, 45);
      gradient.addColorStop('0', COLOR.BLACK);
      gradient.addColorStop('0.01', 'red');
      gradient.addColorStop('1.00', 'gold');

      window.canvas.drawText({
        text: 'SNACK PACK',
        y: 30,
        size: FONT.DOUBLE_BASE_SIZE,
        color: gradient,
      });

      if (this.#instructionsWasClicked) {
        this.#showInstructions();
      } else {
        this.buttons.playButton.draw();
        this.buttons.instructionsButton.draw();
        this.buttons.github.draw();
        this.buttons.linkedin.draw();
        this.buttons.angelist.draw();
      }

      if (this.#audio.paused) {
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

  #showInstructions() {
    const defaultOptions = {
      x: SIZE.HALF_BASE_WIDTH,
      size: FONT.THREE_QUARTERS_BASE_SIZE,
      color: COLOR.WHITE,
      outlineColor: COLOR.BLACK,
    };

    window.canvas.drawText({
      ...defaultOptions,
      text: 'play through a rotating, random',
      y: 70,
    });

    window.canvas.drawText({
      ...defaultOptions,
      text: 'assortment of minigames.',
      y: 90,
    });

    window.canvas.drawText({
      ...defaultOptions,
      text: 'act fast! beat each round',
      y: 120,
    });

    window.canvas.drawText({
      ...defaultOptions,
      text: 'before time runs out.',
      y: 135,
    });

    window.canvas.drawText({
      ...defaultOptions,
      text: 'WASD to move.',
      y: 165,
    });

    window.canvas.drawText({
      ...defaultOptions,
      text: 'SPACEBAR to perform the main action.',
      y: 180,
    });

    window.canvas.drawText({
      ...defaultOptions,
      text: 'MOUSE CLICK to select.',
      y: 195,
    });

    this.buttons.backButton.draw();
  }

  #toggleInstructions() {
    this.#instructionsWasClicked = !this.#instructionsWasClicked;
  }
}

export default Game;
