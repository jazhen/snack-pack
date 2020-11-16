const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

class Button {
  constructor(
    text,
    x,
    y,
    width,
    height,
    fn,
    fillColor = 'red',
    textColor = '#000000'
  ) {
    this.text = text;
    this.base = { x, y, width, height };
    this.scaled = { x, y, width, height };
    this.fn = fn;
    this.fillColor = fillColor;
    this.textColor = textColor;
    this.setScale(canvas.width / 400);
    // this.clicked = false;
    // this.hovered = false;
  }

  setScale(scaleFactor) {
    this.scaled.x = this.base.x * scaleFactor;
    this.scaled.y = this.base.y * scaleFactor;
    this.scaled.width = this.base.width * scaleFactor;
    this.scaled.height = this.base.height * scaleFactor;
  }

  draw() {
    // draw button
    ctx.fillStyle = this.fillColor;
    ctx.fillRect(this.base.x, this.base.y, this.base.width, this.base.height);

    // text options
    const fontSize = 12;
    ctx.fillStyle = this.textColor;
    ctx.font = `${fontSize}px sans-serif`;

    // center the text
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // draw the text
    ctx.fillText(
      this.text,
      this.base.x + this.base.width / 2,
      this.base.y + this.base.height / 2,
      this.base.width
    );
  }

  clicked(pos) {
    return (
      pos.x >= this.scaled.x &&
      pos.x <= this.scaled.x + this.scaled.width &&
      pos.y >= this.scaled.y &&
      pos.y <= this.scaled.y + this.scaled.height
    );
  }

  mouseDown(pos) {
    const clicked = this.clicked(pos);
    if (clicked) {
      console.log(`button clicked with fn: ${this.fn}`);
      this.fn();
    }

    return clicked;
  }
}

export default Button;
