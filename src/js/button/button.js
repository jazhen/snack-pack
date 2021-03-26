class Button {
  constructor(x, y, width, height, fn) {
    this.pos = { x, y };
    this.size = { width, height };
    this.fn = fn;
  }

  getBounds() {
    const leftBorder = this.pos.x * window.canvas.scaleFactor;
    const rightBorder =
      this.pos.x * window.canvas.scaleFactor +
      this.size.width * window.canvas.scaleFactor;
    const topBorder = this.pos.y * window.canvas.scaleFactor;
    const bottomBorder =
      this.pos.y * window.canvas.scaleFactor +
      this.size.height * window.canvas.scaleFactor;

    return {
      leftBorder,
      rightBorder,
      topBorder,
      bottomBorder,
    };
  }

  isClicked(mouseCoord) {
    const {
      leftBorder,
      rightBorder,
      topBorder,
      bottomBorder,
    } = this.getBounds();

    return (
      mouseCoord.x >= leftBorder &&
      mouseCoord.x <= rightBorder &&
      mouseCoord.y >= topBorder &&
      mouseCoord.y <= bottomBorder
    );
  }
}

export default Button;
