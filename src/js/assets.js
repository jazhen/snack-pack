class Assets {
  constructor(mainMenu) {
    this.animate = this.animate.bind(this);
    this.assets = {};
    this.filenames = [
      'mainMenuBackground',
      'door',
      'doorBackground',
      'fighterSelf',
      'fighterOpponent',
      'fighterBackground',
      'locate',
      'locateBackground',
      'wanted',
    ];
    this.mainMenu = mainMenu;
    this.numAssets = this.filenames.length;
    this.numAssetsLoaded = 0;
    this.error = false;
  }

  draw() {
    window.CANVAS.clear();
    window.CANVAS.drawBackground('#dddddd');

    if (this.error) {
      window.CANVAS.drawText(
        'error loading assets.',
        window.CANVAS.width / 2,
        window.CANVAS.height / 2 - window.CANVAS.baseFontSize * 1.5,
        window.CANVAS.baseFontSize * 0.75,
        'black',
        'black'
      );

      window.CANVAS.drawText(
        'please try refreshing your browser.',
        window.CANVAS.width / 2,
        window.CANVAS.height / 2 + window.CANVAS.baseFontSize * 1.5,
        window.CANVAS.baseFontSize * 0.75,
        'black',
        'black'
      );
    } else {
      window.CANVAS.drawText(
        `assets loading: ${this.numAssetsLoaded} / ${this.numAssets}`,
        window.CANVAS.width / 2,
        window.CANVAS.height / 2,
        window.CANVAS.baseFontSize,
        'black',
        'black'
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
    window.requestAnimationFrameId = requestAnimationFrame(this.animate);

    this.draw();
    this.update();
  }

  loadAsset(filename) {
    return new Promise((resolve, reject) => {
      this.assets[filename] = new Image();
      this.assets[filename].src = `../assets/${filename}.png`;
      this.assets[filename].addEventListener('load', resolve, false);
      this.assets[filename].addEventListener('error', reject, false);
    });
  }

  load() {
    this.animate();

    this.filenames.forEach(async (filename) => {
      try {
        await this.loadAsset(filename);
        this.numAssetsLoaded += 1;
      } catch {
        this.error = true;
      }
    });
  }
}

export default Assets;
