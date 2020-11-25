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
    this.base = { x, y, width, height };
    this.scaled = { x, y, width, height };
    this.fn = fn;
    this.fillColor = fillColor;
    this.textColor = textColor;
    this.setScale(canvas.width / 400);
    // this.clicked = false;
    // this.hovered = false;
  }

  setScale(scaleFactor) {
    this.scaled.x = this.base.x * scaleFactor;
    this.scaled.y = this.base.y * scaleFactor;
    this.scaled.width = this.base.width * scaleFactor;
    this.scaled.height = this.base.height * scaleFactor;
  }

  draw() {
    // draw button
    this.canvas.ctx.fillStyle = this.fillColor;

    this.canvas.ctx.fillRect(
      this.base.x,
      this.base.y,
      this.base.width,
      this.base.height
    );

    // draw the text
    this.canvas.drawText(
      this.text,
      this.base.x + this.base.width / 2,
      this.base.y + this.base.height / 2,
      this.base.width
    );
  }

  clicked(pos) {
    return (
      pos.x >= this.scaled.x &&
      pos.x <= this.scaled.x + this.scaled.width &&
      pos.y >= this.scaled.y &&
      pos.y <= this.scaled.y + this.scaled.height
    );
  }

  mouseDown(pos) {
    const clicked = this.clicked(pos);
    if (clicked) {
      console.log(`button clicked with fn: ${this.fn}`);
      this.fn();
    }

    return clicked;
  }
}

export default Button;
