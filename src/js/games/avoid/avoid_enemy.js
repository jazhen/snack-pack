class AvoidEnemy {
  constructor() {
    this.setPosition();
    this.setVelocity();
    this.radius = 13;

    this.size = {
      width: 38,
      height: 37,
    };

    this.frame = {
      x: 0,
      y: 0,
      min: 0,
      max: 6,
    };
  }

  setPosition() {
    this.x = Math.floor(Math.random() * window.BASE_WIDTH);
    this.y = Math.floor(Math.random() * window.BASE_HEIGHT);

    while ((this.x > 150 && this.x < 250) || this.x < 20 || this.x > 380) {
      this.x = Math.floor(Math.random() * window.BASE_WIDTH);
    }

    while ((this.y > 100 && this.y < 200) || this.y < 20 || this.y > 280) {
      this.y = Math.floor(Math.random() * window.BASE_HEIGHT);
    }
  }

  setVelocity() {
    const maxSpeed = 1 + Math.floor(window.ROUND_NUM / 6);
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

    console.log(`(${this.dx}, ${this.dy})`);
  }

  draw() {
    // window.canvas.ctx.beginPath();
    // window.canvas.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    // window.canvas.ctx.fillStyle = '#0095DD';
    // window.canvas.ctx.fill();
    // window.canvas.ctx.closePath();

    window.canvas.drawAnimation(
      window.assets.ghost,
      this.size.width * this.frame.x,
      this.size.height * this.frame.y,
      this.size.width,
      this.size.height,
      this.x - 18 * 1.2,
      this.y - 25 * 1.2,
      this.size.width * 1.2,
      this.size.height * 1.2
    );
  }

  update() {
    // animation;
    if (this.frame.x < this.frame.max) {
      this.frame.x += 1;
    } else {
      this.frame.x = this.frame.min;
    }

    // bouncing off walls
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
