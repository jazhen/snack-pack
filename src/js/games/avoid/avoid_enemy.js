import { SIZE } from '../../constants';
import { getRandomInt, getRandomIntInclusive } from '../../misc';

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
    this.x = getRandomInt(SIZE.BASE_WIDTH);
    this.y = getRandomInt(SIZE.BASE_HEIGHT);

    while ((this.x > 150 && this.x < 250) || this.x < 20 || this.x > 380) {
      this.x = getRandomInt(SIZE.BASE_WIDTH);
    }

    while ((this.y > 100 && this.y < 200) || this.y < 20 || this.y > 280) {
      this.y = getRandomInt(SIZE.BASE_HEIGHT);
    }
  }

  setVelocity() {
    const maxSpeed = 1 + Math.floor(window.ROUND_NUM / 6);
    const dxShouldBeNegative = !!getRandomInt();
    const dyShouldBeNegative = !!getRandomInt();

    this.dx = dxShouldBeNegative
      ? -getRandomIntInclusive(maxSpeed)
      : getRandomIntInclusive(maxSpeed);

    this.dy = dyShouldBeNegative
      ? -getRandomIntInclusive(maxSpeed)
      : getRandomIntInclusive(maxSpeed);
  }

  draw() {
    window.canvas.drawAnimation(
      window.assets.avoidEnemy,
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
    // bouncing off walls
    if (this.x + this.dx > SIZE.BASE_WIDTH - this.radius) {
      this.dx = -this.dx;
      this.frame.y = 0;
    }

    if (
      this.x + this.dx > SIZE.BASE_WIDTH - this.radius ||
      this.x + this.dx < this.radius
    ) {
      this.dx = -this.dx;
    }

    if (this.y + this.dy > SIZE.BASE_HEIGHT - this.radius) {
      this.dy = -this.dy;
      this.frame.y = 1;
    }

    if (
      this.y + this.dy > SIZE.BASE_HEIGHT - this.radius ||
      this.y + this.dy < this.radius
    ) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;
  }
}

export default AvoidEnemy;
