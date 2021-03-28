import { FONT, SIZE } from '../../constants';
import { getRandomInt } from '../../misc';
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

    this.fps = 60;

    this.timeLeft = 5;
    this.countDownCounter = 0;
    this.stopTimer = false;
    this.status = 'undefined';
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
      (SIZE.BASE_WIDTH - 90) / 2,
      (SIZE.BASE_HEIGHT - 108) / 2,
      90 * window.canvas.scaleFactor,
      108 * window.canvas.scaleFactor
    );

    window.canvas.ctx.drawImage(
      window.assets.locate,
      0,
      137 * this.matchAnimal,
      137,
      137,
      (SIZE.BASE_WIDTH - 50) / 2,
      (SIZE.BASE_HEIGHT - 50) / 2 + 5, // move 5px down to center within wanted poster
      50,
      50
    );

    Object.values(this.animals).forEach((animal) => {
      // animal.animate();
      animal.draw();
      // animal.update();
    });

    if (this.status === 'win') {
      window.canvas.drawWinOverlay();
    }

    if (this.status === 'lose') {
      window.canvas.drawLoseOverlay();
    }
  }

  countDown() {
    this.countDownCounter += 1;

    if (this.countDownCounter > this.fps && !this.stopTimer) {
      this.timeLeft -= 1;
      this.countDownCounter = 0;
    }

    window.canvas.drawText({
      text: `${this.timeLeft}`,
      x: 370,
      y: 30,
      size: FONT.ONE_AND_A_HALF_BASE_SIZE,
    });

    if (!this.timeLeft) {
      this.lose();
    }
  }

  lose() {
    this.status = 'lose';
    this.stopTimer = true;
    window.canvas.canvas.removeEventListener('click', this.handleClick, false);

    setTimeout(() => {
      cancelAnimationFrame(window.requestAnimationFrameId);
      window.loseTransition.animate();
    }, 3000);
  }

  win() {
    this.status = 'win';
    this.stopTimer = true;
    window.canvas.canvas.removeEventListener('click', this.handleClick, false);

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
      firstGridPosition = getRandomInt(this.maxGridSpots);
    }

    this.matchAnimal = getRandomInt(this.numAnimalTypes);
    this.animals[firstGridPosition] = this.addAnimal(
      firstGridPosition,
      this.matchAnimal
    );
    this.currentNumAnimals += 1;
  }

  setNonMatchAnimal() {
    // fill up the rest of the animals quota (non-unique)
    while (this.currentNumAnimals < this.requiredNumAnimals) {
      const randomGridPosition = getRandomInt(this.maxGridSpots);
      const randomAnimalType = getRandomInt(this.numAnimalTypes);

      if (
        !this.animals[randomGridPosition] &&
        randomAnimalType !== this.matchAnimal &&
        ![11, 12, 19, 20].includes(randomGridPosition)
      ) {
        this.animals[randomGridPosition] = this.addAnimal(
          randomGridPosition,
          randomAnimalType
        );
        this.currentNumAnimals += 1;
      }
    }
  }

  reset() {
    this.stopTimer = false;
    this.timeLeft = 5;
    this.countDownCounter = 0;
    this.status = 'undefined';

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
