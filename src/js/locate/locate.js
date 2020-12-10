import Animal from './animal';

class Locate {
  constructor(canvas, door, { locate }) {
    this.canvas = canvas;
    this.door = door;
    this.assets = { locate };

    this.animals = {};
    this.matchAnimal = null;
    this.requiredNumAnimals = 5;
    this.currentNumAnimals = 0;

    this.handleClick = this.handleClick.bind(this);
    this.win = this.win.bind(this);

    this.transitionText = 'weirdo';
  }

  draw() {
    Object.values(this.animals).forEach((animal) => {
      if (
        animal.pos.x < 0 ||
        animal.pos.x > 400 ||
        animal.pos.y < 50 ||
        animal.pos.y > 300
      )
        console.log(`x:${animal.pos.x}, y:${animal.pos.y}`);
      this.canvas.drawAnimation(
        this.assets.locate,
        animal.size.width * animal.type,
        animal.size.height * 0,
        animal.size.width,
        animal.size.height,
        animal.pos.x,
        animal.pos.y,
        50,
        50
      );
    });
  }

  win() {
    // debugger;
    cancelAnimationFrame(window.requestAnimationFrameId);
    this.canvas.canvas.removeEventListener('click', this.handleClick, false);
    this.door.animate();
    // this.animals = {};
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

  randomAnimal(gridPosition, type) {
    const size = {
      width: 137,
      height: 137,
    };
    const pos = {
      x: (gridPosition % 8) * 50,
      y: (Math.floor(gridPosition / 8) + 1) * 50,
    };
    return new Animal(size, pos, type, this.canvas);
  }

  setMatchAnimal() {
    const firstGridPosition = Math.floor(Math.random() * 40);
    this.matchAnimal = Math.floor(Math.random() * 9);
    this.animals[firstGridPosition] = this.randomAnimal(
      firstGridPosition,
      this.matchAnimal
    );
    this.currentNumAnimals += 1;
  }

  setNonMatchAnimal() {
    let nonMatchAnimal;

    while (!nonMatchAnimal || nonMatchAnimal === this.matchAnimal) {
      nonMatchAnimal = Math.floor(Math.random() * 9);
    }

    // fill up the rest of the animals quota (non-unique)
    while (this.currentNumAnimals < this.requiredNumAnimals) {
      const gridPosition = Math.floor(Math.random() * 40);

      if (!this.animals[gridPosition]) {
        this.animals[gridPosition] = this.randomAnimal(
          gridPosition,
          nonMatchAnimal
        );
        this.currentNumAnimals += 1;
      }
    }
  }

  play() {
    let lastDrawTime = performance.now();
    const fps = 24;
    const fpsInterval = 1000 / fps;

    // reset
    this.animals = {};
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
        this.canvas.drawBackground('gray');
        this.draw();
      }
    };

    animate();
    this.canvas.canvas.addEventListener('click', this.handleClick, false);
  }
}

export default Locate;
