class LoseTransition {
  constructor(mainMenu, canvas, assets) {
    this.mainMenu = mainMenu;
    this.canvas = canvas;
    this.assets = assets;

    this.fps = 2;
    this.framesCounter = 0;
  }

  draw() {
    this.canvas.drawImage(
      this.assets.doorBackground,
      200,
      150,
      this.canvas.canvas.width,
      this.canvas.canvas.height
    );

    this.canvas.drawText(
      'you lose',
      this.canvas.canvas.width / 2,
      (this.canvas.canvas.height * 2) / 3,
      32,
      'white',
      'black',
      this.canvas.canvas.width
    );
  }

  update() {
    this.framesCounter += 1;

    // 3 secs at 2 fps/sec
    if (this.framesCounter > 6) {
      cancelAnimationFrame(window.requestAnimationFrameId);
      this.mainMenu();
    }
    // if (this.frame.x < this.frame.max) {
    //   this.frame.x += 1;
    // } else {
    //   cancelAnimationFrame(window.requestAnimationFrameId);
    //   this.frame.x = this.frame.min;
    //   this.nextGame.play();
    // }
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

        this.canvas.clear();
        this.update();
        this.draw();
      }
    };

    animate();
  }
}

export default LoseTransition;
