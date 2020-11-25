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

    this.requestAnimationFrameId = null;
    this.setInvervalId = null;
  }

  update() {
    if (this.frame.x >= this.frame.max) {
      clearInterval(this.setInvervalId);
      cancelAnimationFrame(this.requestAnimationFrameId);
      this.frame.x = this.frame.min;
    }
  }

  draw() {
    this.canvas.ctx.imageSmoothingQuality = 'high';

    this.canvas.ctx.drawImage(
      this.assets.doorBackground,
      this.pos.x,
      this.pos.y,
      this.canvas.canvas.width / this.canvas.scaleFactor,
      this.canvas.canvas.height / this.canvas.scaleFactor
    );

    this.canvas.ctx.drawImage(
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
      this.canvas.canvas.width / 2 / this.canvas.scaleFactor,
      (this.canvas.canvas.height * 2) / 3 / this.canvas.scaleFactor,
      'white',
      100
    );
  }

  animate() {
    function animate() {
      this.draw();
      this.requestAnimationFrameId = requestAnimationFrame(animate.bind(this));
      this.update();
    }

    this.setInvervalId = setInterval(() => {
      this.frame.x += 1;
    }, 500);

    animate.call(this);
  }
}

export default Door;
