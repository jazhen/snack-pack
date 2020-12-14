class AvoidSelf {
  constructor() {
    this.radius = 10;
    this.dx = 5;
    this.dy = -5;

    this.pos = {
      x: window.BASE_WIDTH / 2,
      y: window.BASE_HEIGHT / 2,
    };

    this.size = {
      width: 307 / 5,
      height: 178 / 2,
    };

    this.frame = {
      x: 0,
      y: 0,
      min: 0,
      max: 4,
    };

    // movement
    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
  }

  draw() {
    // window.canvas.ctx.beginPath();
    // window.canvas.ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
    // window.canvas.ctx.fillStyle = 'red';
    // window.canvas.ctx.fill();
    // window.canvas.ctx.closePath();

    window.canvas.drawAnimation(
      window.assets.avoidSelf,
      this.size.width * this.frame.x,
      this.size.height * this.frame.y,
      this.size.width,
      this.size.height,
      this.pos.x - 12,
      this.pos.y - 12,
      24,
      24
    );
  }

  update() {
    if (this.up) {
      this.pos.y += this.dy;
      if (this.pos.y - this.radius < 0) {
        this.pos.y = this.radius;
      }
    } else if (this.down) {
      this.pos.y -= this.dy;
      if (this.pos.y + this.radius > window.BASE_HEIGHT) {
        this.pos.y = window.BASE_HEIGHT - this.radius;
      }
    } else if (this.left) {
      this.frame.y = 1;
      this.pos.x -= this.dx;
      if (this.pos.x - this.radius < 0) {
        this.pos.x = this.radius;
      }
    } else if (this.right) {
      this.frame.y = 0;
      this.pos.x += this.dx;
      if (this.pos.x + this.radius > window.BASE_WIDTH) {
        this.pos.x = window.BASE_WIDTH - this.radius;
      }
    }

    // animation;
    if (this.frame.x < this.frame.max) {
      this.frame.x += 1;
    } else {
      this.frame.x = this.frame.min;
    }
  }
}

export default AvoidSelf;
