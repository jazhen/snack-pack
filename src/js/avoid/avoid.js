import AvoidEnemy from './avoid_enemy';
import AvoidSelf from './avoid_self';

class Avoid {
  constructor(canvas, door, loseTransition) {
    this.canvas = canvas;
    this.door = door;
    this.loseTransition = loseTransition;

    this.transitionText = 'avoid';
    this.fps = 48;

    this.self = null;
    this.enemies = [];

    this.keyDownHandler = this.keyDownHandler.bind(this);
    this.keyUpHandler = this.keyUpHandler.bind(this);
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

  play() {
    let lastDrawTime = performance.now();
    const fpsInterval = 1000 / this.fps;

    const animate = () => {
      window.requestAnimationFrameId = requestAnimationFrame(animate);
      const currentTime = performance.now();
      const timeSinceLastDraw = currentTime - lastDrawTime;

      if (timeSinceLastDraw > fpsInterval) {
        lastDrawTime = currentTime - (timeSinceLastDraw % fpsInterval);

        this.canvas.clear();

        this.self.draw();
        this.self.update();

        this.enemies.forEach((enemy) => {
          enemy.draw();
          enemy.update();
        });
      }
    };

    // set up on screen elements
    this.self = new AvoidSelf(this.canvas);
    this.enemies.push(new AvoidEnemy(this.canvas));
    this.enemies.push(new AvoidEnemy(this.canvas));
    this.enemies.push(new AvoidEnemy(this.canvas));
    this.enemies.push(new AvoidEnemy(this.canvas));
    this.enemies.push(new AvoidEnemy(this.canvas));

    // add movement eventlisteners
    document.addEventListener('keydown', this.keyDownHandler, false);
    document.addEventListener('keyup', this.keyUpHandler, false);

    animate();
  }
}

export default Avoid;
