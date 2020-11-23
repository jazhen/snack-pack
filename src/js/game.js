import Button from './button';
import Canvas from './canvas';
// import Door from './door';
import Fighter from './fighter';
import fade from './transitions';

class Game {
  constructor() {
    this.canvas = new Canvas();
    this.elements = [];
    this.assets = {};
    this.requestId = null;
    this.timeoutId = null;

    this.mainMenu = this.mainMenu.bind(this);
    this.play = this.play.bind(this);
    this.instructions = this.instructions.bind(this);
  }

  loadAssets() {
    const filenames = ['fighter', 'door'];

    filenames.forEach((filename) => {
      this.assets[filename] = new Image();
      this.assets[filename].onload = () => {
        console.log(`${filename}.png loaded`);
      };
      this.assets[filename].src = `../assets/${filename}.png`;
    });

    this.mainMenu();
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
    this.elements.forEach((element) =>
      element.draw(this.canvas.ctx, this.assets)
    );
  }

  animate(bgColor, text) {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    const fps = 5;

    function animate() {
      this.timeoutId = setTimeout(() => {
        this.canvas.clearCanvas();
        this.canvas.drawBackground(bgColor);

        if (text) {
          this.canvas.drawText(text, [
            this.canvas.canvas.width / 4,
            this.canvas.canvas.height / 4,
          ]);
        }

        this.draw();
        this.requestId = requestAnimationFrame(animate);
        console.log(this.requestId);
      }, 1000 / fps);
    }

    // eslint-disable-next-line no-func-assign
    animate = animate.bind(this);
    animate();
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

  play() {
    this.clearElements();
    this.addButton('back', [30, 70], [80, 30], this.mainMenu, fade);
    this.elements.push(new Fighter());
    // this.elements.push(new Door());
    this.animate('green', 'playing game');
  }
}

export default Game;
