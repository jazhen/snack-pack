class Animal {
  constructor(size, pos, type, canvas) {
    this.size = size;
    this.pos = pos;
    this.type = type;
    this.canvas = canvas;
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
