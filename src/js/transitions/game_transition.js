import { FONT, FRAMES_PER_SECOND_INTERVAL, SIZE } from '../constants';
import { getRandomInt } from '../misc';

class GameTransition {
  constructor() {
    this.width = 1600 / 6;
    this.height = 400;
    this.frame = {
      x: 0,
      y: 0,
      min: 0,
      max: 5,
    };
    this.pos = {
      x: 0,
      y: 0,
    };

    this.games = [];
    this.nextGame = null;
    this.setInvervalId = null;
  }

  randomGame() {
    const randomGameIndex = getRandomInt(this.games.length);

    return this.games[randomGameIndex];
  }

  draw(transitionText) {
    window.canvas.clear();

    window.canvas.drawImage(
      window.assets.doorBackground,
      this.pos.x,
      this.pos.y,
      SIZE.BASE_WIDTH * window.canvas.scaleFactor,
      SIZE.BASE_HEIGHT * window.canvas.scaleFactor
    );

    window.canvas.drawAnimation(
      window.assets.door,
      this.width * this.frame.x,
      this.height * this.frame.y,
      this.width,
      this.height,
      this.pos.x,
      this.pos.y,
      SIZE.BASE_WIDTH,
      SIZE.BASE_HEIGHT
    );

    window.canvas.drawText({
      text: transitionText,
      y: 150,
      size: FONT.DOUBLE_BASE_SIZE,
    });

    switch (transitionText) {
      case 'win':
        window.canvas.drawImage(
          window.assets.controlsSpace,
          130,
          180,
          (212 / 1.5) * window.canvas.scaleFactor,
          (52 / 1.5) * window.canvas.scaleFactor
        );
        break;
      case 'find':
        window.canvas.drawImage(
          window.assets.controlsMouse,
          180,
          180,
          (101 / 2) * window.canvas.scaleFactor,
          (132 / 2) * window.canvas.scaleFactor
        );
        break;
      case 'avoid':
        window.canvas.drawImage(
          window.assets.controlsWASD,
          160,
          180,
          (131 / 1.5) * window.canvas.scaleFactor,
          (95 / 1.5) * window.canvas.scaleFactor
        );
        break;
      default:
        break;
    }
  }

  update() {
    if (this.frame.x < this.frame.max) {
      this.frame.x += 1;
    } else {
      cancelAnimationFrame(window.requestAnimationFrameId);
      this.nextGame.play();
      this.frame.x = this.frame.min;
    }
  }

  animate() {
    if (window.ROUND_NUM < this.games.length) {
      this.nextGame = this.games[window.ROUND_NUM];
    } else {
      this.nextGame = this.randomGame();
    }

    let lastDrawTime = performance.now();

    const animate = () => {
      window.requestAnimationFrameId = requestAnimationFrame(animate);
      const currentTime = performance.now();
      const timeSinceLastDraw = currentTime - lastDrawTime;

      if (timeSinceLastDraw > FRAMES_PER_SECOND_INTERVAL.TWO) {
        lastDrawTime =
          currentTime - (timeSinceLastDraw % FRAMES_PER_SECOND_INTERVAL.TWO);

        this.update();
        this.draw(this.nextGame.transitionText);
      }
    };

    animate();
  }
}

export default GameTransition;
