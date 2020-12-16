import Animal from './animal';

class Locate {
  constructor() {
    this.animals = {};
    this.matchAnimal = null;
    this.requiredNumAnimals = 5;
    this.currentNumAnimals = 0;

    this.numAnimalTypes = 9;
    this.maxRequiredAnimals = 36;
    this.maxGridSpots = 40;

    this.handleClick = this.handleClick.bind(this);
    this.win = this.win.bind(this);

    this.transitionText = 'find';

    this.fps = 1;

    this.timeLeft = 5;
    this.countDownCounter = 0;
    this.stopTimer = false;
  }

  draw() {
    window.canvas.drawImage(
      window.assets.locateBackground,
      0,
      0,
      window.canvas.width,
      window.canvas.height
    );

    window.canvas.drawImage(
      window.assets.wanted,
      (window.BASE_WIDTH - 90) / 2,
      (window.BASE_HEIGHT - 108) / 2,
      90 * window.canvas.scaleFactor,
      108 * window.canvas.scaleFactor
    );

    window.canvas.ctx.drawImage(
      window.assets.locate,
      0,
      137 * this.matchAnimal,
      137,
      137,
      (window.BASE_WIDTH - 50) / 2,
      (window.BASE_HEIGHT - 50) / 2 + 5, // move 5px down to center within wanted poster
      50,
      50
    );

    Object.values(this.animals).forEach((animal) => {
      // animal.animate();
      animal.draw();
      // animal.update();
    });
  }

  countDown() {
    this.countDownCounter += 1;

    if (this.countDownCounter > this.fps && !this.stopTimer) {
      this.timeLeft -= 1;
      this.countDownCounter = 0;
    }

    window.canvas.drawText(
      `${this.timeLeft}`,
      370 * window.canvas.scaleFactor,
      30 * window.canvas.scaleFactor,
      24
    );

    if (!this.timeLeft) {
      this.lose();
    }
  }

  lose() {
    this.stopTimer = true;
    window.canvas.canvas.removeEventListener('click', this.handleClick, false);

    // overlay a red tint on the canvas
    window.canvas.ctx.fillStyle = 'rgba(244, 62, 62, 0.4)';
    window.canvas.ctx.fillRect(0, 0, window.canvas.width, window.canvas.height);

    setTimeout(() => {
      cancelAnimationFrame(window.requestAnimationFrameId);
      window.loseTransition.animate();
    }, 3000);
  }

  win() {
    this.stopTimer = true;
    window.canvas.canvas.removeEventListener('click', this.handleClick, false);

    // overlay a green tint on the canvas
    window.canvas.ctx.fillStyle = 'rgba(0, 143, 9, 0.4)';
    window.canvas.ctx.fillRect(0, 0, window.canvas.width, window.canvas.height);

    setTimeout(() => {
      cancelAnimationFrame(window.requestAnimationFrameId);
      window.ROUND_NUM += 1;
      window.gameTransition.animate();
    }, 3000);
  }

  handleClick(e) {
    const el = window.canvas.canvas.getBoundingClientRect();
    const mouse = {
      x: e.clientX - el.left,
      y: e.clientY - el.top,
    };

    Object.keys(this.animals).forEach((key) => {
      const animal = this.animals[key];
      animal.mouseDown(
        mouse,
        this.matchAnimal,
        this.win.bind(this),
        this.lose.bind(this)
      );
    });
  }

  // eslint-disable-next-line class-methods-use-this
  addAnimal(gridPosition, type) {
    const size = {
      width: 137,
      height: 137,
    };

    const pos = {
      x: (gridPosition % 8) * 50,
      y: (Math.floor(gridPosition / 8) + 1) * 50,
    };

    return new Animal(size, pos, type);
  }

  setMatchAnimal() {
    let firstGridPosition;
    while (!firstGridPosition || [11, 12, 19, 20].includes(firstGridPosition)) {
      firstGridPosition = Math.floor(Math.random() * this.maxGridSpots);
    }

    this.matchAnimal = Math.floor(Math.random() * this.numAnimalTypes);
    this.animals[firstGridPosition] = this.addAnimal(
      firstGridPosition,
      this.matchAnimal
    );
    this.currentNumAnimals += 1;
  }

  setNonMatchAnimal() {
    // fill up the rest of the animals quota (non-unique)
    while (this.currentNumAnimals < this.requiredNumAnimals) {
      const gridPosition = Math.floor(Math.random() * this.maxGridSpots);
      const nonMatchAnimal = Math.floor(Math.random() * this.numAnimalTypes);

      if (
        !this.animals[gridPosition] &&
        nonMatchAnimal !== this.matchAnimal &&
        ![11, 12, 19, 20].includes(gridPosition)
      ) {
        this.animals[gridPosition] = this.addAnimal(
          gridPosition,
          nonMatchAnimal
        );
        this.currentNumAnimals += 1;
      }
    }
  }

  reset() {
    this.stopTimer = false;
    this.timeLeft = 5;
    this.countDownCounter = 0;

    // reset
    this.animals = {};
    this.requiredNumAnimals = 3 + Math.floor(window.ROUND_NUM / 3) * 2;
    if (this.requiredNumAnimals > this.maxRequiredAnimals) {
      this.requiredNumAnimals = this.maxRequiredAnimals;
    }
    this.currentNumAnimals = 0;

    // set up the match animal (unique)
    this.setMatchAnimal();
    this.setNonMatchAnimal();
  }

  play() {
    let lastDrawTime = performance.now();
    const fpsInterval = 1000 / this.fps;

    this.reset();

    const animate = () => {
      window.requestAnimationFrameId = requestAnimationFrame(animate);
      const currentTime = performance.now();
      const timeSinceLastDraw = currentTime - lastDrawTime;

      if (timeSinceLastDraw > fpsInterval) {
        lastDrawTime = currentTime - (timeSinceLastDraw % fpsInterval);

        window.canvas.clear();
        this.draw();

        if (window.ROUND_NUM >= window.gameTransition.games.length) {
          this.countDown();
        }
      }
    };

    this.reset();
    animate();
    window.canvas.canvas.addEventListener('click', this.handleClick, false);
  }
}

export default Locate;
