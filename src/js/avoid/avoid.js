import AvoidEnemy from './avoid_enemy';

class Avoid {
  constructor(canvas, door, loseTransition) {
    this.canvas = canvas;
    this.door = door;
    this.loseTransition = loseTransition;

    this.transitionText = 'avoid';
    this.fps = 48;

    this.enemies = [];
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
        this.enemies.forEach((enemy) => {
          enemy.draw();
          enemy.update();
        });
      }
    };

    this.enemies.push(new AvoidEnemy(this.canvas));
    this.enemies.push(new AvoidEnemy(this.canvas));
    this.enemies.push(new AvoidEnemy(this.canvas));
    this.enemies.push(new AvoidEnemy(this.canvas));
    this.enemies.push(new AvoidEnemy(this.canvas));
    animate();
  }
}

export default Avoid;
