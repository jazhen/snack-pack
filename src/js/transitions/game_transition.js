class GameTransition {
  constructor({ door, doorBackground }) {
    this.assets = {
      door,
      doorBackground,
    };
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
    window.CANVAS.drawImage(
      this.assets.doorBackground,
      this.pos.x,
      this.pos.y,
      window.BASE_WIDTH * window.CANVAS.scaleFactor,
      window.BASE_HEIGHT * window.CANVAS.scaleFactor
    );

    window.CANVAS.drawAnimation(
      this.assets.door,
      this.width * this.frame.x,
      this.height * this.frame.y,
      this.width,
      this.height,
      this.pos.x,
      this.pos.y,
      window.BASE_WIDTH,
      window.BASE_HEIGHT
    );

    window.CANVAS.drawText(
      transitionText,
      window.CANVAS.width / 2,
      (window.CANVAS.height * 2) / 3,
      32,
      'white',
      'black',
      window.CANVAS.width
    );
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
    this.nextGame = this.randomGame();
    let lastDrawTime = performance.now();
    const fps = 2;
    const fpsInterval = 1000 / fps;

    const animate = () => {
      window.requestAnimationFrameId = requestAnimationFrame(animate);
      const currentTime = performance.now();
      const timeSinceLastDraw = currentTime - lastDrawTime;

      if (timeSinceLastDraw > fpsInterval) {
        lastDrawTime = currentTime - (timeSinceLastDraw % fpsInterval);

        window.CANVAS.clear();
        this.update();
        this.draw(this.nextGame.transitionText);
      }
    };

    animate();
  }
}

export default GameTransition;
