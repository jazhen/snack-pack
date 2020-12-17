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

    window.canvas.drawText(
      `${this.timeLeft}`,
      370 * window.canvas.scaleFactor,
      30 * window.canvas.scaleFactor,
      24
    );

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

    // for (let i = 0; i < this.enemies.length; i++) {
    //   for (let j = 0; j < this.enemies.length; j++) {
    //     const obj1 = this.enemies[i];
    //     const obj2 = this.enemies[j];

    //     if (obj1 !== obj2 && collide(obj1, obj2)) {
    //       console.log('enemy collision detected');
    //     }
    //   }
    // }
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
