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

  constructor(canvas, { fighter3 }) {
    this.canvas = canvas;
    this.assets = { fighter3 };
    // this.width = 650 / 10;
    // this.height = 156 / 2;
    this.width = 744;
    this.height = 711;
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
      jab: () => {
        this.frame.y = 1;
        this.frame.min = 0;
        this.frame.max = 7;
      },
      uppercut: () => {
        this.frame.y = 2;
        this.frame.min = 0;
        this.frame.max = 7;
      },
    };

    this.attacks = Object.keys(this.actions).slice(1);

    this.actions.idle();
    this.action = 'idle';
  }

  randomAttack() {
    return this.attacks[Math.floor(Math.random() * this.attacks.length)];
  }

  draw() {
    this.canvas.ctx.drawImage(
      this.assets.fighter3,
      this.width * this.frame.x,
      this.height * this.frame.y,
      this.width,
      this.height,
      this.pos.x,
      this.pos.y,
      this.canvas.canvas.width / 3,
      this.canvas.canvas.height / 4
    );

    if (this.frame.x < this.frame.max) {
      this.frame.x += 1;
    } else {
      this.frame.x = this.frame.min;
    }
  }

  update() {
    if (this.action !== 'idle' && this.frame.x >= this.frame.max) {
      this.action = 'idle';
      this.actions.idle();
    }
  }

  handleKeyDown(e) {
    e.preventDefault();

    if (e.repeat) {
      return;
    }

    if (e.key === 'z' && this.action === 'idle') {
      this.action = this.randomAttack();
      switch (this.action) {
        case 'jab':
          this.actions.jab();
          break;
        case 'uppercut':
          this.actions.uppercut();
          break;
        default:
          break;
      }
    }
  }

  animate() {
    const fps = 24;
    const fpsInterval = 1000 / fps;
    let then = performance.now();

    function animate() {
      this.requestAnimationFrameId = requestAnimationFrame(animate.bind(this));

      const now = performance.now();
      const elapsed = now - then;

      if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);
        this.update();
        this.canvas.clear();
        this.canvas.drawBackground('gray');
        this.draw();
      }
    }

    document.addEventListener('keydown', (e) => this.handleKeyDown(e), false);

    animate.call(this);
  }
}

export default Fighter;
