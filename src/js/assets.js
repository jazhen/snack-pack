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
        this.assets[filename].addEventListener('load', () => resolve(), false);
        this.assets[filename].addEventListener('error', () => reject(), false);
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
      // setTimeout(() => this.fn(), 3000);
      this.fn();
    }
  }

  draw() {
    this.canvas.clear();
    this.canvas.drawBackground('pink');

    if (this.numAssetsLoaded === null) {
      this.canvas.drawText(
        `error loading assets. please try refreshing your browser.`,
        this.canvas.canvas.width / (2 * this.canvas.scaleFactor),
        this.canvas.canvas.height / (2 * this.canvas.scaleFactor)
      );
    } else {
      this.canvas.drawText(
        `assets loading: ${this.numAssetsLoaded} / ${this.numAssets}`,
        this.canvas.canvas.width / (2 * this.canvas.scaleFactor),
        this.canvas.canvas.height / (2 * this.canvas.scaleFactor)
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
