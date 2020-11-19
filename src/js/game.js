import Button from './button';
import Canvas from './canvas';
import Fighter from './fighter';
import fade from './transitions';

class Game {
  constructor() {
    this.canvas = new Canvas();
    this.elements = [];

    this.mainMenu = this.mainMenu.bind(this);
    this.play = this.play.bind(this);
    this.instructions = this.instructions.bind(this);
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
    this.elements.forEach((element) => element.draw());
  }

  animate(bgColor, text) {
    this.canvas.clearCanvas();
    this.canvas.drawBackground(bgColor);

    if (text) {
      this.canvas.drawText(text, [
        this.canvas.canvas.width / 4,
        this.canvas.canvas.height / 4,
      ]);
    }

    this.draw();

    requestAnimationFrame(this.animate.bind(this, bgColor, text));
  }

  instructions() {
    this.clearElements();
    this.addButton('instructions', [30, 70], [80, 30], this.mainMenu, fade);
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
    this.addButton('instructions', [30, 70], [80, 30], this.mainMenu, fade);
    this.elements.push(new Fighter());
    this.animate('green', 'playing game');
  }
}

export default Game;
