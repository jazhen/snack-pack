import {
  ASSETS_DEFAULT_OPTIONS,
  ASSETS_LOADING_BACKGROUND_COLOR,
  drawErrorMessage,
  FILENAMES,
  loadAsset,
} from './modules';

class Assets {
  #error = false;
  #numLoaded = 0;
  #showMainMenu;

  /**
   * Create an Assets instance.
   * @param {function} showMainMenu
   */
  constructor(showMainMenu) {
    this.#showMainMenu = showMainMenu;
  }

  /**
   * Load all assets.
   */
  load() {
    this.animate();
    FILENAMES.forEach((filename) => this.#loadOne(filename));
  }

  /**
   * Animate the assets loading screen.
   */
  animate() {
    this.#draw();

    window.requestAnimationFrameId = requestAnimationFrame(
      this.animate.bind(this)
    );

    if (this.#isLoaded) {
      cancelAnimationFrame(window.requestAnimationFrameId);
      this.#showMainMenu();
    }
  }

  /**
   * Draw a frame of the asset loading screen.
   */
  #draw() {
    window.canvas.clear();
    window.canvas.drawBackground(ASSETS_LOADING_BACKGROUND_COLOR);

    if (this.#error) {
      drawErrorMessage();
    } else {
      this.#drawPercentLoaded();
    }
  }

  /**
   * Draw the percentage of assets loaded.
   */
  #drawPercentLoaded() {
    window.canvas.drawText({
      ...ASSETS_DEFAULT_OPTIONS,
      text: `assets loading: ${this.#percentLoaded}%`,
    });
  }

  /**
   * Returns the status of assets loading.
   * @returns {boolean}
   */
  get #isLoaded() {
    return this.#numLoaded === FILENAMES.length;
  }

  /**
   * Load one asset.
   * @param {string} filename
   */
  async #loadOne(filename) {
    try {
      await loadAsset(filename);
      this.#numLoaded += 1;
    } catch {
      this.#error = true;
    }
  }

  /**
   * Returns the ratio of assets loaded, expressed as a percentage.
   * @returns {number}
   */
  get #percentLoaded() {
    return Math.floor(this.#numLoaded / FILENAMES.length) * 100;
  }
}

export default Assets;
