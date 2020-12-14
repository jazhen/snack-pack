class LoseTransition {
  constructor(mainMenu) {
    this.mainMenu = mainMenu;

    this.fps = 24;
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

  // eslint-disable-next-line class-methods-use-this
  draw() {
    window.canvas.drawAnimation(
      window.assets.lose,
      this.width * this.frame.x,
      this.height * this.frame.y,
      this.width,
      this.height,
      this.pos.x,
      this.pos.y,
      window.BASE_WIDTH,
      window.BASE_HEIGHT
    );

    window.canvas.drawText(
      'game over',
      window.canvas.width / 2,
      60 * window.canvas.scaleFactor,
      32,
      'white',
      'black'
    );

    if (window.ROUND_NUM === 1) {
      window.canvas.drawText(
        `you survived ${window.ROUND_NUM} round`,
        window.canvas.width / 2,
        100 * window.canvas.scaleFactor,
        16,
        'white',
        'black'
      );
    } else {
      window.canvas.drawText(
        `you survived ${window.ROUND_NUM} rounds`,
        window.canvas.width / 2,
        100 * window.canvas.scaleFactor,
        16,
        'white',
        'black'
      );
    }
  }

  update() {
    if (this.frame.x < this.frame.max) {
      this.frame.x += 1;
    } else {
      this.frame.x = this.frame.min;
    }

    this.framesCounter += 1;

    if (this.framesCounter > this.fps * 5) {
      cancelAnimationFrame(window.requestAnimationFrameId);
      this.mainMenu();
    }
  }

  animate() {
    const fpsInterval = 1000 / this.fps;
    let lastDrawTime = performance.now();

    this.framesCounter = 0;

    const animate = () => {
      window.requestAnimationFrameId = requestAnimationFrame(animate);
      const currentTime = performance.now();
      const timeSinceLastDraw = currentTime - lastDrawTime;

      if (timeSinceLastDraw > fpsInterval) {
        lastDrawTime = currentTime - (timeSinceLastDraw % fpsInterval);

        window.canvas.clear();
        this.update();
        this.draw();
      }
    };

    animate();
  }
}

export default LoseTransition;
