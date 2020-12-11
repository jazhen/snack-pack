class Avoid {
  constructor(canvas, door, loseTransition) {
    this.canvas = canvas;
    this.door = door;
    this.loseTransition = loseTransition;

    this.transitionText = 'avoid';
    this.fps = 24;

    this.enemy = {
      radius: 10,
      x: this.canvas.canvas.width / 2,
      y: this.canvas.canvas.height / 2,
      dx: 2,
      dy: -2,
    };
  }

  draw() {
    // debugger;
    this.canvas.ctx.beginPath();
    this.canvas.ctx.arc(
      this.enemy.x,
      this.enemy.y,
      this.enemy.radius,
      0,
      Math.PI * 2
    );
    this.canvas.ctx.fillStyle = '#0095DD';
    this.canvas.ctx.fill();
    this.canvas.ctx.closePath();
  }

  update() {
    if (
      this.enemy.x + this.enemy.dx > window.BASE_WIDTH - this.enemy.radius ||
      this.enemy.x + this.enemy.dx < this.enemy.radius
    ) {
      this.enemy.dx = -this.enemy.dx;
    }
    if (
      this.enemy.y + this.enemy.dy > window.BASE_HEIGHT - this.enemy.radius ||
      this.enemy.y + this.enemy.dy < this.enemy.radius
    ) {
      this.enemy.dy = -this.enemy.dy;
    }

    this.enemy.x += this.enemy.dx;
    this.enemy.y += this.enemy.dy;
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
        this.draw();
        this.update();
      }
    };

    animate();
  }
}

export default Avoid;
