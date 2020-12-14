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
    return this.games[Math.floor(Math.random() * this.games.length)];
  }

  draw(transitionText) {
    window.canvas.drawImage(
      window.assets.doorBackground,
      this.pos.x,
      this.pos.y,
      window.BASE_WIDTH * window.canvas.scaleFactor,
      window.BASE_HEIGHT * window.canvas.scaleFactor
    );

    window.canvas.drawAnimation(
      window.assets.door,
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
      transitionText,
      window.canvas.width / 2,
      150 * window.canvas.scaleFactor,
      32,
      'white',
      'black',
      window.canvas.width
    );

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
      this.frame.x = this.frame.min;
      this.nextGame.play();
    }
  }

  animate() {
    if (window.ROUND_NUM < this.games.length) {
      this.nextGame = this.games[window.ROUND_NUM];
    } else {
      this.nextGame = this.randomGame();
    }

    let lastDrawTime = performance.now();
    const fps = 2;
    const fpsInterval = 1000 / fps;

    const animate = () => {
      window.requestAnimationFrameId = requestAnimationFrame(animate);
      const currentTime = performance.now();
      const timeSinceLastDraw = currentTime - lastDrawTime;

      if (timeSinceLastDraw > fpsInterval) {
        lastDrawTime = currentTime - (timeSinceLastDraw % fpsInterval);

        window.canvas.clear();
        this.update();
        this.draw(this.nextGame.transitionText);
      }
    };

    animate();
  }
}

export default GameTransition;
