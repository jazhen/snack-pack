class Assets {
  constructor(canvas, mainMenu) {
    this.animate = this.animate.bind(this);
    this.assets = {};
    this.canvas = canvas;
    this.filenames = [
      'door',
      'doorBackground',
      'fighterSelf',
      'fighterOpponent',
      'fighterBackground',
      'locate',
    ];
    this.mainMenu = mainMenu;
    this.numAssets = this.filenames.length;
    this.numAssetsLoaded = 0;
    this.error = false;
  }

  draw() {
    this.canvas.clear();
    this.canvas.drawBackground('pink');

    if (this.error) {
      this.canvas.drawText(
        `error loading assets. please try refreshing your browser.`,
        this.canvas.canvas.width / 2,
        this.canvas.canvas.height / 2,
        '12px'
      );
    } else {
      this.canvas.drawText(
        `assets loading: ${this.numAssetsLoaded} / ${this.numAssets}`,
        this.canvas.canvas.width / 2,
        this.canvas.canvas.height / 2
      );
    }
  }

  update() {
    if (this.numAssetsLoaded === this.numAssets) {
      cancelAnimationFrame(window.requestAnimationFrameId);
      setTimeout(() => this.mainMenu(), 1000);
    }
  }

  animate() {
    this.draw();
    window.requestAnimationFrameId = requestAnimationFrame(this.animate);
    this.update();
  }

  load() {
    const loadAsset = (filename) =>
      new Promise((resolve, reject) => {
        this.assets[filename] = new Image();
        this.assets[filename].src = `../assets/${filename}.png`;
        this.assets[filename].addEventListener('load', () => resolve(), false);
        this.assets[filename].addEventListener('error', () => reject(), false);
      });

    this.animate();

    this.filenames.forEach(async (filename) => {
      try {
        await loadAsset(filename);
        this.numAssetsLoaded += 1;
      } catch {
        this.error = true;
      }
    });
  }
}

export default Assets;
