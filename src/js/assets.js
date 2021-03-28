import { FONT, COLOR } from './constants';

const FILENAMES = [
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
  'avoidBackground',
  'controlsSpace',
  'controlsWASD',
  'controlsMouse',
  'github',
  'linkedin',
  'angelist',
  'speaker',
  'mute',
];

const getAssetFilePath = (filename) => `../assets/${filename}.png`;

class Assets {
  #error = false;
  #numLoaded = 0;

  constructor(mainMenu) {
    this.animate = this.animate.bind(this);
    this.mainMenu = mainMenu;
  }

  load() {
    this.animate();

    const loadAsset = (filename) => {
      return new Promise((resolve, reject) => {
        window.assets[filename] = new Image();
        window.assets[filename].src = getAssetFilePath(filename);
        window.assets[filename].addEventListener('load', resolve, false);
        window.assets[filename].addEventListener('error', reject, false);
      });
    };

    FILENAMES.forEach(async (filename) => {
      try {
        await loadAsset(filename);
        this.#numLoaded += 1;
      } catch {
        this.#error = true;
      }
    });
  }

  #draw() {
    window.canvas.clear();
    window.canvas.drawBackground('#dddddd');

    const defaultOptions = {
      size: FONT.THREE_QUARTERS_BASE_SIZE,
      color: COLOR.BLACK,
    };

    if (this.#error) {
      window.canvas.drawText({
        ...defaultOptions,
        text: 'error loading assets.',
        y: 150 - FONT.ONE_AND_A_HALF_BASE_SIZE,
      });

      window.canvas.drawText({
        ...defaultOptions,
        text: 'please try refreshing your browser.',
        y: 150 + FONT.ONE_AND_A_HALF_BASE_SIZE,
      });
    } else {
      window.canvas.drawText({
        ...defaultOptions,
        text: `assets loading: ${this.#percentLoaded}%`,
      });
    }
  }

  animate() {
    window.requestAnimationFrameId = requestAnimationFrame(this.animate);
    this.#draw();

    if (!this.#isLoaded) {
      cancelAnimationFrame(window.requestAnimationFrameId);
      setTimeout(() => this.mainMenu(), 1000);
    }
  }

  /**
   * Returns the ratio of assets loaded, expressed as a percentage.
   * @returns {number}
   */
  get #percentLoaded() {
    return Math.floor(this.#numLoaded / FILENAMES.length) * 100;
  }

  /**
   * Returns the status of loading.
   * @returns {boolean}
   */
  get #isLoaded() {
    return this.#numLoaded === FILENAMES.length;
  }
}

export default Assets;
