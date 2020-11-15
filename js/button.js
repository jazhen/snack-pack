class Button {
  constructor(
    text,
    x,
    y,
    width,
    height,
    fillColor = 'red',
    textColor = '#000000'
  ) {
    this.text = text;
    this.x = x;
    this.y = y;
    this.scaledX = x;
    this.scaledY = y;
    this.width = width;
    this.height = height;
    this.scaledWidth = width;
    this.scaledHeight = height;
    this.fillColor = fillColor;
    this.textColor = textColor;
    this.clicked = false;
    this.hovered = false;
  }

  setScale(scaleFactor) {
    this.scaledX = this.x * scaleFactor;
    this.scaledY = this.y * scaleFactor;
    this.scaledWidth = this.width * scaleFactor;
    this.scaledHeight = this.height * scaleFactor;
  }

  draw(ctx) {
    // set color
    if (this.hovered) {
      ctx.fillStyle = 'red';
    } else {
      ctx.fillStyle = this.fillColor;
    }

    // draw button
    ctx.fillRect(this.x, this.y, this.width, this.height);

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
      this.x + this.width / 2,
      this.y + this.height / 2,
      this.width
    );
  }

  inBounds(pos) {
    return !(
      pos.x < this.scaledX ||
      pos.x > this.scaledX + this.scaledWidth ||
      pos.y < this.scaledY ||
      pos.y > this.scaledY + this.scaledHeight
    );
  }
}

export default Button;
