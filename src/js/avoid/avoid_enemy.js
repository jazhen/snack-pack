class AvoidEnemy {
  constructor(canvas, x, y, radius = 10, dx = 2, dy = -2) {
    this.canvas = canvas;
    this.x = Math.floor(Math.random() * window.BASE_WIDTH);
    this.y = Math.floor(Math.random() * window.BASE_HEIGHT);
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
  }

  draw() {
    this.canvas.ctx.beginPath();
    this.canvas.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.canvas.ctx.fillStyle = '#0095DD';
    this.canvas.ctx.fill();
    this.canvas.ctx.closePath();
  }

  update() {
    if (
      this.x + this.dx > window.BASE_WIDTH - this.radius ||
      this.x + this.dx < this.radius
    ) {
      this.dx = -this.dx;
    }
    if (
      this.y + this.dy > window.BASE_HEIGHT - this.radius ||
      this.y + this.dy < this.radius
    ) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;
  }
}

export default AvoidEnemy;
