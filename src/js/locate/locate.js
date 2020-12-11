import Animal from './animal';

class Locate {
  constructor(
    canvas,
    door,
    loseTransition,
    { locate, locateBackground, wanted }
  ) {
    this.canvas = canvas;
    this.door = door;
    this.loseTransition = loseTransition;
    this.assets = { locate, locateBackground, wanted };

    this.animals = {};
    this.matchAnimal = null;
    this.requiredNumAnimals = 5;
    this.currentNumAnimals = 0;

    this.numAnimalTypes = 9;
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
    this.canvas.drawImage(
      this.assets.locateBackground,
      0,
      0,
      this.canvas.canvas.width,
      this.canvas.canvas.height
    );

    this.canvas.drawImage(
      this.assets.wanted,
      (400 - 90) / 2,
      (300 - 108) / 2,
      90 * this.canvas.scaleFactor,
      108 * this.canvas.scaleFactor
    );

    this.canvas.ctx.drawImage(
      this.assets.locate,
      0,
      137 * this.matchAnimal,
      137,
      137,
      (400 - 50) / 2,
      (300 - 50) / 2 + 5, // move 5px down to center within wanted poster
      50,
      50
    );

    Object.values(this.animals).forEach((animal) => {
      // animal.animate();
      animal.draw();
      // animal.update();
    });
  }

  lose() {
    this.stopTimer = true;
    this.canvas.canvas.removeEventListener('click', this.handleClick, false);

    setTimeout(() => {
      cancelAnimationFrame(window.requestAnimationFrameId);
      this.loseTransition.animate();
    }, 3000);
  }

  countDown() {
    this.countDownCounter += 1;

    if (this.countDownCounter > this.fps && !this.stopTimer) {
      this.timeLeft -= 1;
      this.countDownCounter = 0;
    }

    this.canvas.drawText(
      `${this.timeLeft}`,
      370 * this.canvas.scaleFactor,
      30 * this.canvas.scaleFactor,
      24
    );

    if (!this.timeLeft) {
      this.lose();
    }
  }

  win() {
    this.stopTimer = true;
    this.canvas.canvas.removeEventListener('click', this.handleClick, false);

    setTimeout(() => {
      cancelAnimationFrame(window.requestAnimationFrameId);
      this.door.animate();
    }, 3000);
  }

  handleClick(e) {
    const el = this.canvas.canvas.getBoundingClientRect();
    const mouse = {
      x: e.clientX - el.left,
      y: e.clientY - el.top,
    };

    Object.keys(this.animals).forEach((key) => {
      const animal = this.animals[key];
      animal.mouseDown(mouse, this.matchAnimal, this.win);
    });
  }

  addAnimal(gridPosition, type) {
    const size = {
      width: 137,
      height: 137,
    };

    const pos = {
      x: (gridPosition % 8) * 50,
      y: (Math.floor(gridPosition / 8) + 1) * 50,
    };

    return new Animal(size, pos, type, this.assets.locate, this.canvas);
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
  }

  play() {
    let lastDrawTime = performance.now();
    const fpsInterval = 1000 / this.fps;

    // reset
    this.animals = {};
    // maxGridSpots - wanted poster spots
    this.requiredNumAnimals = 5;
    this.currentNumAnimals = 0;

    // set up the match animal (unique)
    this.setMatchAnimal();
    this.setNonMatchAnimal();

    const animate = () => {
      window.requestAnimationFrameId = requestAnimationFrame(animate);
      const currentTime = performance.now();
      const timeSinceLastDraw = currentTime - lastDrawTime;

      if (timeSinceLastDraw > fpsInterval) {
        lastDrawTime = currentTime - (timeSinceLastDraw % fpsInterval);

        this.canvas.clear();
        this.draw();
        this.countDown();
      }
    };

    this.reset();
    animate();
    this.canvas.canvas.addEventListener('click', this.handleClick, false);
  }
}

export default Locate;