import Animal from './animal';

class Locate {
  constructor(canvas, door, { locate }) {
    this.canvas = canvas;
    this.door = door;
    this.assets = { locate };

    this.animals = {};
    this.matchType = null;

    this.handleClick = this.handleClick.bind(this);
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

  handleClick(e) {
    const el = this.canvas.canvas.getBoundingClientRect();
    const mouse = {
      x: e.clientX - el.left,
      y: e.clientY - el.top,
    };

    Object.keys(this.animals).forEach((key) => {
      const animal = this.animals[key];
      animal.mouseDown(mouse, this.matchType);
    });
  }

  play() {
    let lastDrawTime = performance.now();
    const fps = 24;
    const fpsInterval = 1000 / fps;

    // create an animal
    const randomAnimal = (gridPosition, type) => {
      const size = {
        width: 137,
        height: 137,
      };
      const pos = {
        x: (gridPosition % 8) * 50,
        y: (Math.floor(gridPosition / 8) + 1) * 50,
      };
      return new Animal(size, pos, type, this.canvas);
    };

    const requiredNumAnimals = 40;
    let currentNumAnimals = 0;

    // set up the match animal (unique)
    const firstGridPosition = Math.floor(Math.random() * 40);
    this.matchType = Math.floor(Math.random() * 9);
    this.animals[firstGridPosition] = randomAnimal(
      firstGridPosition,
      this.matchType
    );
    currentNumAnimals += 1;

    // fill up the rest of the animals quota (non-unique)
    while (currentNumAnimals < requiredNumAnimals) {
      const gridPosition = Math.floor(Math.random() * 40);
      const type = Math.floor(Math.random() * 9);

      if (!this.animals[gridPosition] && type !== this.matchType) {
        this.animals[gridPosition] = randomAnimal(gridPosition, type);
        currentNumAnimals += 1;
      }
    }

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
