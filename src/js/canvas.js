class Canvas {
  constructor() {
    this.canvas = document.querySelector('#canvas');
    this.ctx = this.canvas.getContext('2d');

    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawBackground(color) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawText(text, pos, color = 'black') {
    this.ctx.fillStyle = color;
    this.ctx.fillText(text, pos[0], pos[1]);
  }
}

export default Canvas;
