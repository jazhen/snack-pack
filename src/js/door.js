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
      this.canvas.canvas.width / this.canvas.scaleFactor,
      this.canvas.canvas.height / this.canvas.scaleFactor
    );

    this.canvas.drawText(
      'MASH',
      this.canvas.canvas.width / 2,
      (this.canvas.canvas.height * 2) / 3,
      48,
      this.canvas.canvas.width,
      'white'
    );
  }

  update() {
    if (this.frame.x >= this.frame.max) {
      clearInterval(this.setInvervalId);
      cancelAnimationFrame(window.requestAnimationFrameId);
      this.frame.x = this.frame.min;
      this.nextGame.play();
    }
  }

  animate() {
    this.nextGame = this.randomGame();

    function animate() {
      this.draw();
      window.requestAnimationFrameId = requestAnimationFrame(
        animate.bind(this)
      );
      this.update();
    }

    animate.call(this);

    this.setInvervalId = setInterval(() => {
      this.frame.x += 1;
    }, 500);
  }
}

export default Door;
