class Animal {
  constructor(size, pos, type, locate, canvas) {
    this.size = size;
    this.pos = pos;
    this.frame = {
      x: Math.floor(Math.random() * 9),
      y: type,
      min: 0,
      max: 11,
    };
    this.type = type;
    this.locate = locate;
    this.canvas = canvas;
  }

  draw() {
    this.canvas.drawAnimation(
      this.locate,
      this.size.width * this.frame.x,
      this.size.height * this.frame.y,
      this.size.width,
      this.size.height,
      this.pos.x,
      this.pos.y,
      50,
      50
    );
  }

  update() {
    if (this.frame.x < this.frame.max) {
      this.frame.x += 1;
    } else {
      this.frame.x = this.frame.min;
    }
  }

  animate() {
    this.draw();
    this.update();
  }

  clicked(mouse) {
    // 50 being the width and height of the outputted animal on the canvas
    const leftBorder = this.pos.x * this.canvas.scaleFactor;
    const rightBorder =
      this.pos.x * this.canvas.scaleFactor + 50 * this.canvas.scaleFactor;
    const topBorder = this.pos.y * this.canvas.scaleFactor;
    const bottomBorder =
      this.pos.y * this.canvas.scaleFactor + 50 * this.canvas.scaleFactor;

    return (
      mouse.x >= leftBorder &&
      mouse.x <= rightBorder &&
      mouse.y >= topBorder &&
      mouse.y <= bottomBorder
    );
  }

  mouseDown(mouse, matchAnimal, fn) {
    if (this.clicked(mouse)) {
      console.log(`(${this.pos.x}, ${this.pos.y}) clicked`);
      if (this.type === matchAnimal) {
        console.log('CORRECT animal clicked');
        fn();
      }
    }
  }
}

export default Animal;
