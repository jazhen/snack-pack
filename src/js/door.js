class Door {
  constructor(canvas, { door, doorBackground }) {
    this.canvas = canvas;
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

  draw() {
    this.canvas.drawImage(
      this.assets.doorBackground,
      this.pos.x,
      this.pos.y,
      this.canvas.canvas.width,
      this.canvas.canvas.height
    );

    this.canvas.drawAnimation(
      this.assets.door,
      this.width * this.frame.x,
      this.height * this.frame.y,
      this.width,
      this.height,
      this.pos.x,
      this.pos.y,
      400,
      300
    );

    this.canvas.drawText(
      'MASH',
      this.canvas.canvas.width / 2,
      (this.canvas.canvas.height * 2) / 3,
      '48px',
      this.canvas.canvas.width,
      'white'
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
        this.canvas.clear();
        this.update();
        this.draw();
      }
    };

    animate();
  }
}

export default Door;
