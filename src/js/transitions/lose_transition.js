import {
  FRAMES_PER_SECOND,
  FRAMES_PER_SECOND_INTERVAL,
  SIZE,
} from '../constants';

class LoseTransition {
  constructor(mainMenu) {
    this.mainMenu = mainMenu;

    this.framesCounter = 0;

    this.width = 359;
    this.height = 270;
    this.frame = {
      x: 0,
      y: 0,
      min: 0,
      max: 34,
    };
    this.pos = {
      x: 0,
      y: 0,
    };
  }

  draw() {
    window.canvas.drawAnimation(
      window.assets.lose,
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
      text: 'game over',
      y: 60,
    });

    window.canvas.drawText({
      text: `you survived ${window.ROUND_NUM} rounds`,
      y: 100,
    });
  }

  update() {
    if (this.frame.x < this.frame.max) {
      this.frame.x += 1;
    } else {
      this.frame.x = this.frame.min;
    }

    this.framesCounter += 1;

    if (this.framesCounter > FRAMES_PER_SECOND.TWENTY_FOUR * 5) {
      cancelAnimationFrame(window.requestAnimationFrameId);
      this.mainMenu();
    }
  }

  animate() {
    let lastDrawTime = performance.now();

    this.framesCounter = 0;

    const animate = () => {
      window.requestAnimationFrameId = requestAnimationFrame(animate);
      const currentTime = performance.now();
      const timeSinceLastDraw = currentTime - lastDrawTime;

      if (timeSinceLastDraw > FRAMES_PER_SECOND_INTERVAL.TWENTY_FOUR) {
        lastDrawTime =
          currentTime -
          (timeSinceLastDraw % FRAMES_PER_SECOND_INTERVAL.TWENTY_FOUR);

        window.canvas.clear();
        this.update();
        this.draw();
      }
    };

    animate();
  }
}

export default LoseTransition;
