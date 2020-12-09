class Locate {
  constructor(canvas, door, { locate }) {
    this.canvas = canvas;
    this.door = door;
    this.assets = { locate };

    this.animals = {};
    this.matchType = null;
  }

  draw() {
    Object.values(this.animals).forEach((animal) => {
      // debugger;
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

  play() {
    let lastDrawTime = performance.now();
    const fps = 24;
    const fpsInterval = 1000 / fps;

    // create an animal
    const randomAnimal = (gridPosition, type) => {
      const animal = {
        size: {
          width: 137,
          height: 137,
        },
        pos: {
          x: (gridPosition % 8) * 50,
          y: (Math.floor(gridPosition / 8) + 1) * 50,
        },
        type,
      };

      return animal;
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

    // this.canvas.canvas.addEventListener(
    //   'click',
    //   (e) => {
    //     const el = this.canvas.canvas.getBoundingClientRect();
    //     const mouse = {
    //       x: e.clientX - el.left,
    //       y: e.clientY - el.top,
    //     };

    //     Object.keys(game.elements).forEach((key) => {
    //       const element = game.elements[key];
    //       if (element instanceof Button) {
    //         element.mouseDown(mouse);
    //       }
    //     });
    //   },
    //   false
    // );

    // document.addEventListener('keydown', this.handleKeyDown, false);
    animate();
  }

  mouseDown(mouse, animal) {
    const clicked = () => {
      const leftBorder = animal.pos.x;
      const rightBorder = leftBorder + 50;
      const topBorder = animal.pos.y;
      const bottomBorder = topBorder + 50;

      return (
        mouse.x >= leftBorder &&
        mouse.x <= rightBorder &&
        mouse.y >= topBorder &&
        mouse.y <= bottomBorder
      );
    };

    if (clicked(mouse, animal)) {
      console.log('clicked');
      if (animal.type === this.matchType) {
        console.log('CORRECT animal clicked');
        // this.fn();
      }
    }
  }
}

export default Locate;
