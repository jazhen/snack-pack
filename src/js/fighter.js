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

  constructor(canvas, { fighterSelf, fighterOpponent }) {
    this.canvas = canvas;
    this.assets = { fighterSelf, fighterOpponent };
    this.animate = this.animate.bind(this);

    // self

    this.self = {
      size: {
        width: 209.3,
        height: 200,
      },
      pos: {
        x: 0,
        y: 33,
      },
      frame: {
        x: 0,
        y: 0,
        min: 0,
        max: 0,
      },
      actions: {
        idle: () => {
          this.self.frame.y = 0;
          this.self.frame.min = 0;
          this.self.frame.max = 9;
        },
        jab: () => {
          this.self.frame.y = 1;
          this.self.frame.min = 0;
          this.self.frame.max = 7;
        },
        uppercut: () => {
          this.self.frame.y = 2;
          this.self.frame.min = 0;
          this.self.frame.max = 7;
        },
      },
      action: 'idle',
      attacks: ['jab', 'uppercut'],
    };

    // opponent

    this.opponent = {
      size: {
        width: 255.1,
        height: 250,
      },
      pos: {
        x: 150,
        y: 0,
      },
      frame: {
        x: 0,
        y: 0,
        min: 0,
        max: 0,
      },
      actions: {
        dizzy: () => {
          this.opponent.frame.y = 0;
          this.opponent.frame.min = 0;
          this.opponent.frame.max = 7;
        },
        hurt: () => {
          this.opponent.frame.y = 1;
          this.opponent.frame.min = 0;
          this.opponent.frame.max = 7;
        },
        ko: () => {
          this.opponent.frame.y = 2;
          this.opponent.frame.min = 0;
          this.opponent.frame.max = 9;
        },
      },
      action: 'dizzy',
    };

    // set up initial actions

    this.self.actions.idle();
    this.opponent.actions.dizzy();

    //

    this.counter = 0;
  }

  randomAttack() {
    return this.self.attacks[
      Math.floor(Math.random() * this.self.attacks.length)
    ];
  }

  draw() {
    this.canvas.drawAnimation(
      this.assets.fighterSelf,
      this.self.size.width * this.self.frame.x,
      this.self.size.height * this.self.frame.y,
      this.self.size.width,
      this.self.size.height,
      this.self.pos.x,
      this.self.pos.y,
      this.self.size.width,
      this.self.size.height
    );

    this.canvas.drawAnimation(
      this.assets.fighterOpponent,
      this.opponent.size.width * this.opponent.frame.x,
      this.opponent.size.height * this.opponent.frame.y,
      this.opponent.size.width,
      this.opponent.size.height,
      this.opponent.pos.x,
      this.opponent.pos.y,
      this.opponent.size.width,
      this.opponent.size.height
    );
  }

  update() {
    if (this.counter < 10) {
      if (
        this.self.action !== 'idle' &&
        this.self.frame.x >= this.self.frame.max
      ) {
        this.self.action = 'idle';
        this.self.actions.idle();

        this.opponent.action = 'dizzy';
        this.opponent.actions.dizzy();
      }
    } else {
      this.opponent.action = 'ko';
      this.opponent.actions.ko();
      this.self.action = 'idle';
      this.self.actions.idle();
    }

    if (this.self.frame.x < this.self.frame.max) {
      this.self.frame.x += 1;
    } else {
      this.self.frame.x = this.self.frame.min;
    }

    if (this.opponent.frame.x < this.opponent.frame.max) {
      this.opponent.frame.x += 1;
    } else if (this.opponent.action !== 'ko') {
      this.opponent.frame.x = this.opponent.frame.min;
    }
  }

  validKeyDown(e) {
    return !e.repeat && e.key === 'z' && this.self.action === 'idle';
  }

  handleKeyDown(e) {
    e.preventDefault();

    if (!e.repeat && e.key === 'z') {
      this.counter += 1;
      console.log(this.counter);
    }

    if (this.validKeyDown(e)) {
      this.self.action = this.randomAttack();
      switch (this.self.action) {
        case 'jab':
          this.self.actions.jab();
          this.opponent.actions.hurt();
          break;
        case 'uppercut':
          this.self.actions.uppercut();
          this.opponent.actions.hurt();
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
