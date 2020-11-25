class Button {
  constructor(
    canvas,
    text,
    x,
    y,
    width,
    height,
    fn,
    fillColor = 'red',
    textColor = '#000000'
  ) {
    this.canvas = canvas;
    this.text = text;
    this.pos = { x, y };
    this.size = { width, height };
    this.fn = fn;
    this.fillColor = fillColor;
    this.textColor = textColor;
    // this.clicked = false;
    // this.hovered = false;
  }

  draw() {
    // draw button
    this.canvas.ctx.fillStyle = this.fillColor;

    this.canvas.ctx.fillRect(
      this.pos.x,
      this.pos.y,
      this.size.width,
      this.size.height
    );

    // draw the text
    this.canvas.drawText(
      this.text,
      this.pos.x + this.size.width / 2,
      this.pos.y + this.size.height / 2,
      this.size.width
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
    const clicked = this.clicked(mouse);
    if (clicked) {
      console.log(`button clicked with fn: ${this.fn}`);
      this.fn();
    }

    return clicked;
  }
}

export default Button;
