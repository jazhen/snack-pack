class Canvas {
  constructor() {
    this.canvas = document.querySelector('#canvas');
    this.ctx = this.canvas.getContext('2d');
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawBackground(color) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawText(text, x, y, color = 'black', size = 16) {
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.font = `${size}px arial`;
    this.ctx.fillStyle = color;
    this.ctx.fillText(text, x, y, this.canvas.width * 0.8);
  }
}

export default Canvas;
