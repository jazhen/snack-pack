import { FONT, COLOR, SIZE } from './constants';

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

  /**
   * Draws text with the specified options.
   * @param {Object} options
   */
  drawText(options) {
    const defaultOptions = {
      text: 'placeholder',
      x: SIZE.HALF_BASE_WIDTH,
      y: SIZE.HALF_BASE_HEIGHT,
      size: FONT.BASE_SIZE,
      color: COLOR.WHITE,
      outlineColor: COLOR.BLACK,
    };

    const { text, x, y, size, color, outlineColor } = {
      ...defaultOptions,
      ...options,
    };

    const scaledX = x * window.canvas.scaleFactor;
    const scaledY = y * window.canvas.scaleFactor;

    // font style
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.fillStyle = color;
    this.ctx.font = `${size}px ${FONT.NAME}`;
    this.ctx.fillText(
      text,
      scaledX / this.scaleFactor,
      scaledY / this.scaleFactor
    );

    // outline style
    this.ctx.strokeStyle = outlineColor;
    this.ctx.strokeText(
      text,
      scaledX / this.scaleFactor,
      scaledY / this.scaleFactor
    );
    this.ctx.stroke();
  }

  drawButtonText(
    text,
    x,
    y,
    width,
    height,
    maxWidth = width,
    color = COLOR.WHITE,
    outlineColor = COLOR.BLACK,
    size = FONT.BASE_SIZE
  ) {
    // font style
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.fillStyle = color;
    this.ctx.font = `${size}px dogicapixelbold`;
    this.ctx.fillText(text, x + width / 2, y + height / 2, maxWidth);

    // outline style
    this.ctx.strokeStyle = outlineColor;
    this.ctx.strokeText(text, x + width / 2, y + height / 2);
    this.ctx.stroke();
  }

  drawRect(x, y, width, height, fillColor, outlineColor = 'transparent') {
    // rectangle style
    this.ctx.fillStyle = fillColor;
    this.ctx.fillRect(x, y, width, height);

    // outline style
    this.ctx.strokeStyle = outlineColor;
    this.ctx.strokeRect(x, y, width, height);
    this.ctx.stroke();
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

  // overlay a green tint on the canvas
  drawWinOverlay() {
    const RED = 'rgba(0, 143, 9, 0.2)';
    this.#drawOverlay(RED);
  }

  // overlay a red tint on the canvas
  drawLoseOverlay() {
    const GREEN = 'rgba(244, 62, 62, 0.2)';
    this.#drawOverlay(GREEN);
  }

  getBoundingClientRect() {
    return this.canvas.getBoundingClientRect();
  }

  scale() {
    this.ctx.scale(this.scaleFactor, this.scaleFactor);
  }

  #drawOverlay(color) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(0, 0, SIZE.BASE_WIDTH, SIZE.BASE_HEIGHT);
  }
}

export default Canvas;
