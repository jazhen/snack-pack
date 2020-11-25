class Canvas {
  constructor() {
    this.canvas = document.querySelector('#canvas');
    this.ctx = this.canvas.getContext('2d');
    this.scaleFactor = 1;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawBackground(color) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawText(
    text,
    x,
    y,
    maxWidth = this.canvas.width,
    color = 'black',
    size = 16
  ) {
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.font = `${size}px arial`;
    this.ctx.fillStyle = color;
    this.ctx.fillText(text, x, y, maxWidth * 0.8);
  }

  scale() {
    this.ctx.scale(this.scaleFactor, this.scaleFactor);
  }
}

export default Canvas;
