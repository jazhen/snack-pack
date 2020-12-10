class Button {
  constructor(
    canvas,
    text,
    x,
    y,
    width,
    height,
    fn,
    fillColor = 'transparent'
  ) {
    this.canvas = canvas;
    this.text = text;
    this.pos = { x, y };
    this.size = { width, height };
    this.fn = fn;
    this.fillColor = fillColor;
    // this.fillColor = 'red';
  }

  draw() {
    this.canvas.drawRect(
      this.pos.x,
      this.pos.y,
      this.size.width,
      this.size.height,
      this.fillColor
    );

    this.canvas.drawButtonText(
      this.text,
      this.pos.x,
      this.pos.y,
      this.size.width,
      this.size.height
    );
  }

  clicked(mouse) {
    const leftBorder = this.pos.x * this.canvas.scaleFactor;
    const rightBorder =
      this.pos.x * this.canvas.scaleFactor +
      this.size.width * this.canvas.scaleFactor;
    const topBorder = this.pos.y * this.canvas.scaleFactor;
    const bottomBorder =
      this.pos.y * this.canvas.scaleFactor +
      this.size.height * this.canvas.scaleFactor;

    return (
      mouse.x >= leftBorder &&
      mouse.x <= rightBorder &&
      mouse.y >= topBorder &&
      mouse.y <= bottomBorder
    );
  }

  mouseDown(mouse) {
    if (this.clicked(mouse)) {
      this.fn();
    }
  }
}

export default Button;
