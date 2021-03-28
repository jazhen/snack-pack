import { getRandomInt } from '../../misc';

class Animal {
  constructor(size, pos, type) {
    this.size = size;
    this.pos = pos;
    this.frame = {
      x: getRandomInt(9),
      y: type,
      min: 0,
      max: 11,
    };
    this.type = type;
  }

  draw() {
    window.canvas.drawAnimation(
      window.assets.locate,
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
    const leftBorder = this.pos.x * window.canvas.scaleFactor;
    const rightBorder =
      this.pos.x * window.canvas.scaleFactor + 50 * window.canvas.scaleFactor;
    const topBorder = this.pos.y * window.canvas.scaleFactor;
    const bottomBorder =
      this.pos.y * window.canvas.scaleFactor + 50 * window.canvas.scaleFactor;

    return (
      mouse.x >= leftBorder &&
      mouse.x <= rightBorder &&
      mouse.y >= topBorder &&
      mouse.y <= bottomBorder
    );
  }

  mouseDown(mouse, matchAnimal, win, lose) {
    if (this.clicked(mouse)) {
      if (this.type === matchAnimal) {
        win();
      } else {
        lose();
      }
    }
  }
}

export default Animal;
