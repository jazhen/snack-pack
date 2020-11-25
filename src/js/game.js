import Assets from './assets';
import Button from './button';
import Canvas from './canvas';
import Door from './door';
// import Fighter from './fighter';
import fade from './transitions';

class Game {
  constructor() {
    this.mainMenu = this.mainMenu.bind(this);
    this.play = this.play.bind(this);
    this.instructions = this.instructions.bind(this);

    this.canvas = new Canvas();
    this.assets = new Assets(this.canvas, this.mainMenu);
    this.elements = [];

    this.requestAnimationFrameId = null;
    this.setTimeoutId = null;
  }

  resize() {
    const gameWindow = document.querySelector('#main');
    let newCanvasWidth = window.innerWidth;
    let newCanvasHeight = window.innerHeight;
    const goalAspectRatio = 4 / 3;
    const currentAspectRatio = newCanvasWidth / newCanvasHeight;

    // resize, taking into account screen orientation
    if (currentAspectRatio > goalAspectRatio) {
      // window width is longer than desired game width
      newCanvasWidth = newCanvasHeight * goalAspectRatio;
      gameWindow.style.height = `${newCanvasHeight}px`;
      gameWindow.style.width = `${newCanvasWidth}px`;
    } else {
      // window height is taller than desired game height
      newCanvasHeight = newCanvasWidth / goalAspectRatio;
      gameWindow.style.width = `${newCanvasWidth}px`;
      gameWindow.style.height = `${newCanvasHeight}px`;
    }

    // set margins to center canvas
    gameWindow.style.marginTop = `${-newCanvasHeight / 2}px`;
    gameWindow.style.marginLeft = `${-newCanvasWidth / 2}px`;

    // set new canvas size
    this.canvas.canvas.width = newCanvasWidth;
    this.canvas.canvas.height = newCanvasHeight;

    // scale all canvas elements to new size
    // this.canvas.scaleFactor = newCanvasWidth / 4;
    this.canvas.scaleFactor = newCanvasWidth / 400;
    this.canvas.scale();
  }

  clearElements() {
    this.elements = [];
  }

  addButton(text, pos, size, fn, fx) {
    this.elements.push(
      new Button(this.canvas, text, pos[0], pos[1], size[0], size[1], () => {
        fx();
        fn();
      })
    );
  }

  draw() {
    this.elements.forEach((element) => element.draw(this.canvas, this.assets));
  }

  animate(bgColor, text, seconds, fps = 2) {
    if (this.setTimeoutId) {
      clearTimeout(this.setTimeoutId);
    }

    function animate() {
      this.setTimeoutId = setTimeout(() => {
        this.canvas.clear();
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

        this.requestAnimationFrameId = requestAnimationFrame(animate);
        console.log(this.requestAnimationFrameId);
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
        clearTimeout(this.setTimeoutId);

        // start fighter game
        // that.canvas.clear();
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
    function draw() {
      this.canvas.clear();
      this.canvas.drawBackground('orange');
      this.elements.forEach((element) => {
        element.draw();
      });
    }

    function animate() {
      draw.call(this);
      this.requestAnimationFrameId = requestAnimationFrame(animate.bind(this));
    }

    this.clearElements();
    this.addButton('play', [0, 0], [100, 50], this.play, fade);
    this.addButton(
      'instructions',
      [0, 100],
      [100, 50],
      this.instructions,
      fade
    );
    animate.call(this);
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
    // await this.canvas.clear();
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
    //   this.canvas.clear();
    //   this.clearElements();
    //   this.elements.push(new Fighter());
    //   this.animate('green', 'playing game', undefined, 10);
    // });
  }
}

export default Game;
