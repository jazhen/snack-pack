class ClickableImage {
  constructor(image, x, y, width, height, fn) {
    this.image = image;
    this.pos = { x, y };
    this.size = { width, height };
    this.fn = fn;
  }

  draw() {
    window.canvas.drawImage(
      this.image,
      this.pos.x,
      this.pos.y,
      this.size.width * window.canvas.scaleFactor,
      this.size.height * window.canvas.scaleFactor
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

export default ClickableImage;
