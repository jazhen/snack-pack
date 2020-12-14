class Assets {
  constructor(mainMenu) {
    this.animate = this.animate.bind(this);
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
      'lose',
      'avoidSelf',
      'avoidEnemy',
    ];
    this.mainMenu = mainMenu;
    this.numAssets = this.filenames.length;
    this.numAssetsLoaded = 0;
    this.error = false;
  }

  draw() {
    window.canvas.clear();
    window.canvas.drawBackground('#dddddd');

    if (this.error) {
      window.canvas.drawText(
        'error loading assets.',
        window.canvas.width / 2,
        window.canvas.height / 2 - window.canvas.baseFontSize * 1.5,
        window.canvas.baseFontSize * 0.75,
        'black',
        'black'
      );

      window.canvas.drawText(
        'please try refreshing your browser.',
        window.canvas.width / 2,
        window.canvas.height / 2 + window.canvas.baseFontSize * 1.5,
        window.canvas.baseFontSize * 0.75,
        'black',
        'black'
      );
    } else {
      window.canvas.drawText(
        `assets loading: ${(this.numAssetsLoaded / this.numAssets) * 100}%`,
        window.canvas.width / 2,
        window.canvas.height / 2,
        window.canvas.baseFontSize,
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

  load() {
    this.animate();

    const loadAsset = (filename) => {
      return new Promise((resolve, reject) => {
        window.assets[filename] = new Image();
        window.assets[filename].src = `../assets/${filename}.png`;
        window.assets[filename].addEventListener('load', resolve, false);
        window.assets[filename].addEventListener('error', reject, false);
      });
    };

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
