class Door {
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
  }

  draw(canvas, { door, doorBackground }) {
    canvas.ctx.drawImage(
      doorBackground,
      this.pos.x,
      this.pos.y,
      canvas.canvas.width,
      canvas.canvas.height
    );

    canvas.ctx.drawImage(
      door,
      this.width * this.frame.x,
      this.height * this.frame.y,
      this.width,
      this.height,
      this.pos.x,
      this.pos.y,
      canvas.canvas.width,
      canvas.canvas.height
    );

    canvas.drawText(
      'MASH',
      canvas.canvas.width / 2,
      (canvas.canvas.height * 2) / 3,
      'white',
      100
    );

    if (this.frame.x < this.frame.max) {
      this.frame.x += 1;
    } else {
      this.frame.x = this.frame.min;
    }
  }

  // setScale(scaleFactor) {
  //   debugger;
  // }
}

export default Door;
