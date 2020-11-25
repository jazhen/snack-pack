class Assets {
  constructor(canvas, fn) {
    this.animate = this.animate.bind(this);
    this.assets = {};
    this.canvas = canvas;
    this.filenames = ['fighter', 'door', 'doorBackground'];
    this.fn = fn;
    this.numAssets = this.filenames.length;
    this.numAssetsLoaded = 0;
    this.requestAnimationFrameId = null;
    this.setTimeoutId = null;
  }

  load() {
    const loadAsset = (filename) => {
      return new Promise((resolve, reject) => {
        this.assets[filename] = new Image();
        this.assets[filename].addEventListener('load', () => resolve());
        this.assets[filename].addEventListener('error', () => reject());
        this.assets[filename].src = `../assets/${filename}.png`;
      });
    };

    this.animate();

    this.filenames.forEach(async (filename) => {
      try {
        await loadAsset(filename);
        this.numAssetsLoaded += 1;
      } catch {
        this.numAssetsLoaded = null;
      }
    });
  }

  update() {
    if (this.numAssetsLoaded === this.numAssets) {
      cancelAnimationFrame(this.requestAnimationFrameId);
      setTimeout(() => this.fn(), 3000);
    }
  }

  draw() {
    this.canvas.clear();
    this.canvas.drawBackground('pink');

    if (this.numAssetsLoaded === null) {
      this.canvas.drawText(
        `Error loading assets. Please try refreshing your browser.`,
        this.canvas.canvas.width / 2,
        this.canvas.canvas.height / 2
        // 'black',
        // 48
      );
    } else {
      this.canvas.drawText(
        `Assets loading: ${this.numAssetsLoaded} / ${this.numAssets}`,
        this.canvas.canvas.width / 2,
        this.canvas.canvas.height / 2
        // 'black',
        // 48
      );
    }
  }

  animate() {
    this.draw();
    this.requestAnimationFrameId = requestAnimationFrame(this.animate);
    this.update();
  }
}

export default Assets;
