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

  update(fn) {
    if (this.frame.x >= this.frame.max) {
      clearInterval(this.setInvervalId);
      cancelAnimationFrame(this.requestAnimationFrameId);
      this.frame.x = this.frame.min;
      fn();
    }
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
      this.canvas.canvas.width,
      this.canvas.canvas.height
    );

    this.canvas.drawText(
      'MASH',
      this.canvas.canvas.width / 2,
      (this.canvas.canvas.height * 2) / 3,
      this.canvas.canvas.width,
      'white',
      48
    );
  }

  animate(fn) {
    function animate() {
      this.draw();
      this.requestAnimationFrameId = requestAnimationFrame(animate.bind(this));
      this.update(fn);
    }

    animate.call(this);

    this.setInvervalId = setInterval(() => {
      this.frame.x += 1;
    }, 500);
  }
}

export default Door;
