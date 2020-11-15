class Button {
  constructor(
    text,
    x,
    y,
    baseWidth,
    baseHeight,
    fillColor = 'red',
    textColor = '#000000'
  ) {
    this.text = text;
    this.x = x;
    this.y = y;
    this.baseWidth = baseWidth;
    this.baseHeight = baseHeight;
    this.scaledWidth = baseWidth;
    this.scaledHeight = baseHeight;
    this.fillColor = fillColor;
    this.textColor = textColor;
    this.clicked = false;
    this.hovered = false;
  }

  resize(ctx) {
    const scaleX = ctx.canvas.width / 400;
    const scaleY = ctx.canvas.height / 300;
    this.scaledWidth = this.baseWidth * scaleX;
    this.scaledHeight = this.baseHeight * scaleY;
  }

  draw(ctx) {
    // set color
    if (this.hovered) {
      ctx.fillStyle = 'red';
    } else {
      ctx.fillStyle = this.fillColor;
    }

    // draw button
    ctx.fillRect(this.x, this.y, this.scaledWidth, this.scaledHeight);

    // text options
    const fontSize = 16;
    ctx.fillStyle = this.textColor;
    ctx.font = `${fontSize}px sans-serif`;

    // center the text
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // draw the text
    ctx.fillText(
      this.text,
      this.x + this.scaledWidth / 2,
      this.y + this.scaledHeight / 2,
      this.scaledWidth
    );
  }
}

export default Button;
