class Fighter {
  /*
    width: single sprite px width
    height: single sprite px height
    frame: {
      x: sprite sheet col,
      y: sprite sheet row,
      min: starting frame of an animation,
      max: ending frame of an animation
    }
    pos: {
      x: canvas col,
      y: canvas row
    }

  */

  constructor(canvas, { fighter }) {
    this.canvas = canvas;
    this.assets = { fighter };
    this.width = 650 / 10;
    this.height = 156 / 2;
    this.frame = {
      x: 0,
      y: 0,
      min: 0,
      max: 0,
    };
    this.pos = {
      x: 40,
      y: 100,
    };

    this.animate = this.animate.bind(this);

    this.actions = {
      idle: () => {
        this.frame.y = 0;
        this.frame.min = 0;
        this.frame.max = 9;
      },
      punch: () => {
        this.frame.y = 1;
        this.frame.min = 0;
        this.frame.max = 5;
      },
    };

    this.actions.idle();
  }

  draw() {
    this.canvas.ctx.drawImage(
      this.assets.fighter,
      this.width * this.frame.x,
      this.height * this.frame.y,
      this.width,
      this.height,
      this.pos.x,
      this.pos.y,
      this.width,
      this.height
    );

    if (this.frame.x < this.frame.max) {
      this.frame.x += 1;
    } else {
      this.frame.x = this.frame.min;
    }
  }

  handleKeyDown(e) {
    e.preventDefault();

    if (e.repeat) {
      this.actions.idle();
      return;
    }

    if (e.key === ' ') {
      this.actions.punch();
    }
  }

  handleKeyUp(e) {
    e.preventDefault();
    this.actions.idle();
  }

  animate() {
    function animate() {
      this.canvas.clear();
      this.canvas.drawBackground('gray');
      this.draw();
      this.requestAnimationFrameId = requestAnimationFrame(animate.bind(this));
    }

    document.addEventListener('keydown', (e) => this.handleKeyDown(e), false);

    document.addEventListener('keyup', (e) => this.handleKeyUp(e), false);

    animate.call(this);
  }
}

export default Fighter;
