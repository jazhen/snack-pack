class Avoid {
  constructor(canvas, door, loseTransition) {
    this.canvas = canvas;
    this.door = door;
    this.loseTransition = loseTransition;

    this.transitionText = 'avoid';
    this.fps = 24;

    this.x = this.canvas.canvas.width / 2;
    this.y = this.canvas.canvas.height / 2;
    this.dx = 2;
    this.dy = -2;
  }

  draw() {
    // debugger;
    this.canvas.ctx.beginPath();
    this.canvas.ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
    this.canvas.ctx.fillStyle = '#ffffff';
    this.canvas.ctx.fill();
    this.canvas.ctx.closePath();
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;
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
