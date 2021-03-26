import Button from './button';

class ImageButton extends Button {
  constructor(x, y, width, height, fn, image) {
    super(x, y, width, height, fn);
    this.image = image;
  }

  draw() {
    window.canvas.drawImage(
      this.image,
      this.pos.x,
      this.pos.y,
      this.size.width * window.canvas.scaleFactor,
      this.size.height * window.canvas.scaleFactor
    );
  }
}

export default ImageButton;
