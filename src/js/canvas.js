class Canvas {
  constructor() {
    this.canvas = document.querySelector('#canvas');
    this.ctx = this.canvas.getContext('2d');
    this.width = 400;
    this.height = 300;
    this.scaleFactor = 1;
    this.baseFontSize = 16;
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
    size = this.baseFontSize,
    color = 'white',
    outlineColor = 'black'
  ) {
    // font style
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.fillStyle = color;
    this.ctx.font = `${size}px DogicaPixelBold`;
    this.ctx.fillText(text, x / this.scaleFactor, y / this.scaleFactor);

    // outline style
    this.ctx.strokeStyle = outlineColor;
    this.ctx.strokeText(text, x / this.scaleFactor, y / this.scaleFactor);
    this.ctx.stroke();
  }

  drawButtonText(
    text,
    x,
    y,
    width,
    height,
    maxWidth = width,
    color = 'white',
    outlineColor = 'black',
    size = this.baseFontSize
  ) {
    // font style
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.fillStyle = color;
    this.ctx.font = `${size}px DogicaPixelBold`;
    this.ctx.fillText(text, x + width / 2, y + height / 2, maxWidth);

    // outline style
    this.ctx.strokeStyle = outlineColor;
    this.ctx.strokeText(text, x + width / 2, y + height / 2);
    this.ctx.stroke();
  }

  drawRect(x, y, width, height, fillColor) {
    this.ctx.fillStyle = fillColor;
    this.ctx.fillRect(x, y, width, height);
  }

  drawImage(image, dx, dy, dWidth, dHeight) {
    this.ctx.drawImage(
      image,
      dx,
      dy,
      dWidth / this.scaleFactor,
      dHeight / this.scaleFactor
    );
  }

  drawAnimation(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) {
    this.ctx.imageSmoothingEnabled = false;
    this.ctx.mozImageSmoothingEnabled = false;

    this.ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
  }

  scale() {
    this.ctx.scale(this.scaleFactor, this.scaleFactor);
  }
}

export default Canvas;
