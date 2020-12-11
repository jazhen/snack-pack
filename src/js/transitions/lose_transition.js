class LoseTransition {
  constructor(mainMenu) {
    this.mainMenu = mainMenu;

    this.fps = 2;
    this.framesCounter = 0;
  }

  // eslint-disable-next-line class-methods-use-this
  draw() {
    window.canvas.drawImage(
      window.assets.doorBackground,
      0,
      0,
      window.BASE_WIDTH * window.canvas.scaleFactor,
      window.BASE_HEIGHT * window.canvas.scaleFactor
    );

    window.canvas.drawText(
      'you lose',
      window.canvas.width / 2,
      (window.canvas.height * 2) / 3,
      32,
      'white',
      'black',
      window.canvas.width
    );
  }

  update() {
    this.framesCounter += 1;

    // 3 secs at 2 fps/sec
    if (this.framesCounter > 6) {
      cancelAnimationFrame(window.requestAnimationFrameId);
      this.mainMenu();
    }
  }

  animate() {
    const fpsInterval = 1000 / this.fps;
    let lastDrawTime = performance.now();

    this.framesCounter = 0;

    const animate = () => {
      window.requestAnimationFrameId = requestAnimationFrame(animate);
      const currentTime = performance.now();
      const timeSinceLastDraw = currentTime - lastDrawTime;

      if (timeSinceLastDraw > fpsInterval) {
        lastDrawTime = currentTime - (timeSinceLastDraw % fpsInterval);

        window.canvas.clear();
        this.update();
        this.draw();
      }
    };

    animate();
  }
}

export default LoseTransition;
