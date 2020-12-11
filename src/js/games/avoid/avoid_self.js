class AvoidSelf {
  constructor(x, y, radius = 10, dx = 5, dy = -5) {
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
    window.canvas.ctx.beginPath();
    window.canvas.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    window.canvas.ctx.fillStyle = 'red';
    window.canvas.ctx.fill();
    window.canvas.ctx.closePath();
  }

  update() {
    if (this.up) {
      this.y += this.dy;
      if (this.y - this.radius < 0) {
        this.y = this.radius;
      }
    } else if (this.down) {
      this.y -= this.dy;
      if (this.y + this.radius > window.BASE_HEIGHT) {
        this.y = window.BASE_HEIGHT - this.radius;
      }
    } else if (this.left) {
      this.x -= this.dx;
      if (this.x - this.radius < 0) {
        this.x = this.radius;
      }
    } else if (this.right) {
      this.x += this.dx;
      if (this.x + this.radius > window.BASE_WIDTH) {
        this.x = window.BASE_WIDTH - this.radius;
      }
    }
  }
}

export default AvoidSelf;
