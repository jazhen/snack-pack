class Button {
  constructor(text, x, y, width, height, fn, fillColor = 'transparent') {
    this.text = text;
    this.pos = { x, y };
    this.size = { width, height };
    this.fn = fn;
    this.fillColor = fillColor;
    // this.fillColor = 'red';
  }

  draw() {
    window.canvas.drawRect(
      this.pos.x,
      this.pos.y,
      this.size.width,
      this.size.height,
      this.fillColor
    );

    window.canvas.drawButtonText(
      this.text,
      this.pos.x,
      this.pos.y,
      this.size.width,
      this.size.height
    );
  }

  clicked(mouse) {
    const leftBorder = this.pos.x * window.canvas.scaleFactor;
    const rightBorder =
      this.pos.x * window.canvas.scaleFactor +
      this.size.width * window.canvas.scaleFactor;
    const topBorder = this.pos.y * window.canvas.scaleFactor;
    const bottomBorder =
      this.pos.y * window.canvas.scaleFactor +
      this.size.height * window.canvas.scaleFactor;

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
