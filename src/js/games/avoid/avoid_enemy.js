class AvoidEnemy {
  constructor() {
    this.setPosition();
    this.radius = 15;
    this.setVelocity();
  }

  setPosition() {
    this.x = Math.floor(Math.random() * window.BASE_WIDTH);
    this.y = Math.floor(Math.random() * window.BASE_HEIGHT);

    while (this.x > 150 && this.x < 250) {
      this.x = Math.floor(Math.random() * window.BASE_WIDTH);
    }

    while (this.y > 100 && this.y < 200) {
      this.y = Math.floor(Math.random() * window.BASE_HEIGHT);
    }
  }

  setVelocity() {
    const maxSpeed = 1 + Math.floor(window.ROUND_NUM / 12);
    console.log(`max speed: ${maxSpeed}`);

    this.dx = Math.floor(Math.random() * maxSpeed) + 1;
    this.dy = Math.floor(Math.random() * maxSpeed) + 1;
    const negativedx = Math.floor(Math.random() * 1);
    const negativedy = Math.floor(Math.random() * 1);

    if (negativedx) {
      this.dx = -this.dx;
    }

    if (negativedy) {
      this.dy = -this.dy;
    }
  }

  draw() {
    window.canvas.ctx.beginPath();
    window.canvas.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    window.canvas.ctx.fillStyle = '#0095DD';
    window.canvas.ctx.fill();
    window.canvas.ctx.closePath();
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
