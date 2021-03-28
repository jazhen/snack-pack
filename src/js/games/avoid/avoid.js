import { FONT } from '../../constants';
import AvoidEnemy from './avoid_enemy';
import AvoidSelf from './avoid_self';

class Avoid {
  constructor() {
    this.transitionText = 'avoid';
    this.fps = 60;
    this.timeLeft = 5;
    this.stopTimer = false;

    this.self = null;
    this.enemies = [];
    this.numEnemies = 5;

    this.keyDownHandler = this.keyDownHandler.bind(this);
    this.keyUpHandler = this.keyUpHandler.bind(this);
  }

  countDown() {
    this.countDownCounter += 1;

    if (this.countDownCounter > this.fps && !this.stopTimer) {
      this.timeLeft -= 1;
      this.countDownCounter = 0;
    }

    window.canvas.drawText({
      text: `${this.timeLeft}`,
      x: 370,
      y: 30,
      size: FONT.ONE_AND_A_HALF_BASE_SIZE,
    });

    if (!this.timeLeft) {
      this.win();
    }
  }

  keyDownHandler(e) {
    if (e.key === 'w') {
      this.self.up = true;
    } else if (e.key === 'a') {
      this.self.left = true;
    } else if (e.key === 's') {
      this.self.down = true;
    } else if (e.key === 'd') {
      this.self.right = true;
    }
  }

  keyUpHandler(e) {
    if (e.key === 'w') {
      this.self.up = false;
    } else if (e.key === 'a') {
      this.self.left = false;
    } else if (e.key === 's') {
      this.self.down = false;
    } else if (e.key === 'd') {
      this.self.right = false;
    }
  }

  removeEventHandlers() {
    document.addEventListener('keydown', this.keyDownHandler, false);
    document.addEventListener('keyup', this.keyUpHandler, false);
  }

  lose() {
    window.canvas.drawLoseOverlay();
    this.stopTimer = true;
    this.removeEventHandlers();
    cancelAnimationFrame(window.requestAnimationFrameId);

    setTimeout(() => {
      window.loseTransition.animate();
    }, 3000);
  }

  win() {
    window.canvas.drawWinOverlay();
    this.stopTimer = true;
    this.removeEventHandlers();
    cancelAnimationFrame(window.requestAnimationFrameId);

    setTimeout(() => {
      window.ROUND_NUM += 1;
      window.gameTransition.animate();
    }, 3000);
  }

  checkCollisions() {
    const collide = (obj1, obj2) => {
      const centerDist = Math.sqrt(
        (obj1.pos.x - obj2.x) ** 2 + (obj1.pos.y - obj2.y) ** 2
      );

      return centerDist < obj1.radius + obj2.radius;
    };

    this.enemies.forEach((enemy) => {
      if (collide(this.self, enemy)) {
        this.lose();
      }
    });
  }

  reset() {
    // timer
    this.stopTimer = false;
    this.timeLeft = 5;
    this.countDownCounter = 0;

    // enemies
    this.enemies = [];
    this.numEnemies = 1 + Math.floor(window.ROUND_NUM / 6);

    // set up on screen elements
    this.self = new AvoidSelf();
    for (let i = 0; i < this.numEnemies; i++) {
      this.enemies.push(new AvoidEnemy());
    }

    // add movement eventlisteners
    document.addEventListener('keydown', this.keyDownHandler, false);
    document.addEventListener('keyup', this.keyUpHandler, false);
  }

  draw() {
    window.canvas.drawImage(
      window.assets.avoidBackground,
      0,
      0,
      window.canvas.width,
      window.canvas.height
    );

    this.self.draw();
    this.self.update();

    this.enemies.forEach((enemy) => {
      enemy.draw();
      enemy.update();
    });
  }

  play() {
    let lastDrawTime = performance.now();
    const fpsInterval = 1000 / this.fps;

    const animate = () => {
      window.requestAnimationFrameId = requestAnimationFrame(animate);
      const currentTime = performance.now();
      const timeSinceLastDraw = currentTime - lastDrawTime;

      if (timeSinceLastDraw > fpsInterval) {
        lastDrawTime = currentTime - (timeSinceLastDraw % fpsInterval);

        window.canvas.clear();
        this.draw();

        this.checkCollisions();
        this.countDown();
      }
    };

    this.reset();
    animate();
  }
}

export default Avoid;
