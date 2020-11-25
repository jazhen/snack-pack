class Assets {
  constructor() {
    this.assets = {};
    this.filenames = ['fighter', 'door', 'doorBackground'];
    this.numAssets = this.filenames.length;
    this.numAssetsLoaded = 0;

    this.requestAnimationFrameId = null;
    this.setTimeoutId = null;
  }

  load(canvas, fn) {
    this.filenames.forEach(async (filename) => {
      try {
        console.info(await this.loadAsset.call(this, filename));
        this.numAssetsLoaded += 1;
      } catch (error) {
        console.error(error);
        this.numAssetsLoaded = null;
      }
    });

    this.animate(canvas, fn);
  }

  loadAssetPromise(assets, filename) {
    return new Promise((resolve, reject) => {
      assets[filename] = new Image();
      assets[filename].addEventListener('load', () =>
        resolve(`${filename}.png loaded`)
      );
      assets[filename].addEventListener('error', () =>
        reject(new Error(`${filename}.png failed to load`))
      );
      this.assets[filename].src = `../assets/${filename}.png`;
    });
  }

  loadAsset(filename) {
    return this.loadAssetPromise(this.assets, filename);
  }

  draw(canvas) {
    if (this.numAssetsLoaded === null) {
      canvas.drawText(
        `Error loading assets. Please try refreshing your browser.`,
        canvas.canvas.width / 2,
        canvas.canvas.height / 2,
        'black',
        48
      );
    } else {
      canvas.drawText(
        `Assets loading: ${this.numAssetsLoaded} / ${this.numAssets}`,
        canvas.canvas.width / 2,
        canvas.canvas.height / 2,
        'black',
        48
      );
    }
  }

  animate(canvas, fn) {
    function animate() {
      canvas.clearCanvas();
      canvas.drawBackground('pink');
      this.draw(canvas);
      this.requestAnimationFrameId = requestAnimationFrame(animate.bind(this));
      console.log(this.requestAnimationFrameId);

      if (this.numAssetsLoaded === this.numAssets) {
        cancelAnimationFrame(this.requestAnimationFrameId);
        fn();
      }
    }

    animate.call(this);
  }
}

export default Assets;
