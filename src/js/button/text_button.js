import Button from './button';

class TextButton extends Button {
  constructor(x, y, width, height, fn, text, fillColor = 'transparent') {
    super(x, y, width, height, fn);
    this.text = text;
    this.fillColor = fillColor;
  }

  draw() {
    window.canvas.drawRect(
      this.pos.x,
      this.pos.y,
      this.size.width,
      this.size.height,
      this.fillColor
    );

    window.canvas.drawButtonText(
      this.text,
      this.pos.x,
      this.pos.y,
      this.size.width,
      this.size.height
    );
  }
}

export default TextButton;
