class AvoidSelf {
  constructor(canvas, x, y, radius = 10, dx = 2, dy = -2) {
    this.canvas = canvas;
    this.x = window.BASE_WIDTH / 2;
    this.y = window.BASE_HEIGHT / 2;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;

    // movement
    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
  }

  draw() {
    this.canvas.ctx.beginPath();
    this.canvas.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.canvas.ctx.fillStyle = 'red';
    this.canvas.ctx.fill();
    this.canvas.ctx.closePath();
  }

  update() {
    // if (
    //   this.x + this.dx > window.BASE_WIDTH - this.radius ||
    //   this.x + this.dx < this.radius
    // ) {
    //   this.dx = -this.dx;
    // }
    // if (
    //   this.y + this.dy > window.BASE_HEIGHT - this.radius ||
    //   this.y + this.dy < this.radius
    // ) {
    //   this.dy = -this.dy;
    // }

    // this.x += this.dx;
    // this.y += this.dy;
    if (this.up) {
      this.y -= 2;
    } else if (this.down) {
      this.y += 2;
    } else if (this.left) {
      this.x -= 2;
    } else if (this.right) {
      this.x += 2;
    }
  }
}

export default AvoidSelf;
