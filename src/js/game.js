import Assets from './assets';
import Button from './button';
import Canvas from './canvas';
import Door from './door';
// import Fighter from './fighter';
import fade from './transitions';

class Game {
  constructor() {
    this.canvas = new Canvas();
    this.assets = new Assets();
    this.elements = [];
    // this.assets = {};
    this.rAFId = null;
    this.timeoutId = null;

    this.mainMenu = this.mainMenu.bind(this);
    this.play = this.play.bind(this);
    this.instructions = this.instructions.bind(this);
  }

  resize() {
    const gameWindow = document.querySelector('#main');
    let canvasWidth = window.innerWidth;
    let canvasHeight = window.innerHeight;
    const goalAspectRatio = 4 / 3;
    const currentAspectRatio = canvasWidth / canvasHeight;

    // resize, taking into account screen orientation
    if (currentAspectRatio > goalAspectRatio) {
      canvasWidth = canvasHeight * goalAspectRatio;
      gameWindow.style.height = `${canvasHeight}px`;
      gameWindow.style.width = `${canvasWidth}px`;
    } else {
      canvasHeight = canvasWidth / goalAspectRatio;
      gameWindow.style.width = `${canvasWidth}px`;
      gameWindow.style.height = `${canvasHeight}px`;
    }

    // set margins to center canvas
    gameWindow.style.marginTop = `${-canvasHeight / 2}px`;
    gameWindow.style.marginLeft = `${-canvasWidth / 2}px`;

    // set new canvas size
    this.canvas.canvas.width = canvasWidth;
    this.canvas.canvas.height = canvasHeight;

    // scale all canvas elements to new size
    // const scaleFactor = canvasWidth / 400;
    // this.canvas.scaleFactor = canvasWidth / 400;
    // this.canvas.ctx.scale(this.canvas.scaleFactor, this.canvas.scaleFactor);
    // this.canvas.ctx.scale(scaleFactor, scaleFactor);

    // this.elements.forEach((element) => {
    //   element.setScale(scaleFactor);
    // });
  }

  clearElements() {
    this.elements = [];
  }

  addButton(text, pos, size, fn, fx) {
    this.elements.push(
      new Button(text, pos[0], pos[1], size[0], size[1], () => {
        fx();
        fn();
      })
    );
  }

  draw() {
    this.elements.forEach((element) => element.draw(this.canvas, this.assets));
  }

  animate(bgColor, text, seconds, fps = 2) {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    function animate() {
      this.timeoutId = setTimeout(() => {
        this.canvas.clearCanvas();
        this.canvas.drawBackground(bgColor);

        this.draw();

        // if (text) {
        //   this.canvas.drawText(
        //     text,
        //     {
        //       x: this.canvas.canvas.width / 2,
        //       y: this.canvas.canvas.height / 2,
        //     },
        //     'white',
        //     48
        //   );
        // }

        this.rAFId = requestAnimationFrame(animate);
        console.log(this.rAFId);
      }, 1000 / fps);
    }

    // eslint-disable-next-line no-func-assign
    animate = animate.bind(this);
    animate();

    if (seconds) {
      // const that = this;
      setTimeout(() => {
        // cancel door transition
        console.log('cancel animation now');
        clearTimeout(this.timeoutId);

        // start fighter game
        // that.canvas.clearCanvas();
        // that.clearElements();
        // that.elements.push(new Fighter());
        // that.animate('green', 'playing game', undefined, 10);
      }, seconds * 1000);
    }
  }

  instructions() {
    this.clearElements();
    this.addButton('back', [30, 70], [80, 30], this.mainMenu, fade);
    this.animate('blue', 'instructions go here');
  }

  mainMenu() {
    this.clearElements();
    this.addButton('play', [30, 30], [80, 30], this.play, fade);
    this.addButton('instructions', [30, 70], [80, 30], this.instructions, fade);
    this.animate('yellow');
  }

  async doorAnimation() {
    const door = new Door(this.assets.assets);
    door.animate(this.canvas);
    await door.cancelAnimation();
    console.log('next phase');
    // door
    //   .cancelAnimation()
    //   .then((result) => result())
    //   .catch((error) => console.log(error));
    // await this.canvas.clearCanvas();
  }

  play() {
    console.log('playing now');
    this.clearElements();
    this.doorAnimation();

    // this.addButton('back', [30, 70], [80, 30], this.mainMenu, fade);
    // this.elements.push(new Fighter());
    // this.elements.push(new Door());
    // this.elements.push(new Door(this.assets));
    // this.animate('green', 'mash', 6, 1);
    // const animate = await this.animate2();
    // this.animate('green', 'mash', 6, 1).then(() => {
    //   debugger;
    //   this.canvas.clearCanvas();
    //   this.clearElements();
    //   this.elements.push(new Fighter());
    //   this.animate('green', 'playing game', undefined, 10);
    // });
  }
}

export default Game;
