import { SIZE } from '../../constants';

class AvoidSelf {
  constructor() {
    this.radius = 10;
    this.dx = 5;
    this.dy = -5;

    this.pos = {
      x: SIZE.HALF_BASE_WIDTH,
      y: SIZE.HALF_BASE_HEIGHT / 2,
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
      if (this.pos.y + this.radius > SIZE.BASE_HEIGHT) {
        this.pos.y = SIZE.BASE_HEIGHT - this.radius;
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
      if (this.pos.x + this.radius > SIZE.BASE_WIDTH) {
        this.pos.x = SIZE.BASE_WIDTH - this.radius;
      }
    }

    // animation
    if (this.left || this.right) {
      if (this.frame.x < this.frame.max) {
        this.frame.x += 1;
      } else {
        this.frame.x = this.frame.min;
      }
    }
  }
}

export default AvoidSelf;
