class LoseTransition {
  constructor(mainMenu, assets) {
    this.mainMenu = mainMenu;
    this.assets = assets;

    this.fps = 2;
    this.framesCounter = 0;
  }

  draw() {
    window.CANVAS.drawImage(
      this.assets.doorBackground,
      0,
      0,
      window.BASE_WIDTH * window.CANVAS.scaleFactor,
      window.BASE_HEIGHT * window.CANVAS.scaleFactor
    );

    window.CANVAS.drawText(
      'you lose',
      window.CANVAS.width / 2,
      (window.CANVAS.height * 2) / 3,
      32,
      'white',
      'black',
      window.CANVAS.width
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

        window.CANVAS.clear();
        this.update();
        this.draw();
      }
    };

    animate();
  }
}

export default LoseTransition;
