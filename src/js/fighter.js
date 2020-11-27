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

  constructor(canvas, door, { fighterSelf, fighterOpponent }) {
    this.canvas = canvas;
    this.door = door;
    this.assets = { fighterSelf, fighterOpponent };
    this.requestAnimationFrameId = null;
    this.animate = this.animate.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);

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

    // update self frame
    if (this.self.frame.x < this.self.frame.max) {
      this.self.frame.x += 1;
    } else {
      this.self.frame.x = this.self.frame.min;
    }

    // update opponent frame
    if (this.opponent.frame.x < this.opponent.frame.max) {
      this.opponent.frame.x += 1;
    } else if (this.opponent.action !== 'ko') {
      this.opponent.frame.x = this.opponent.frame.min;
    }
  }

  done() {
    cancelAnimationFrame(this.requestAnimationFrameId);
    document.removeEventListener('keydown', this.handleKeyDown, false);
    this.counter = 0;
    this.opponent.action = 'dizzy';
    this.opponent.actions.dizzy();
    this.door.animate();
  }

  update() {
    if (this.counter < 10) {
      // if did not reach target click amount and finished attack animation
      // then switch to default animations
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
      // if reach target click amount
      // then switch to opponent ko animation

      this.opponent.action = 'ko';
      this.opponent.actions.ko();

      this.self.action = 'idle';
      this.self.actions.idle();

      // cancel fighter animation
      // removeEventListener
      // reset fighter game
      // go to door animation

      setTimeout(() => this.done(), 3000);
    }
  }

  handleKeyDown(e) {
    function validKeyDown() {
      return !e.repeat && e.key === 'z';
    }

    e.preventDefault();

    if (validKeyDown()) {
      this.counter += 1;
      console.log(this.counter);

      if (this.self.action === 'idle' && this.opponent.action !== 'ko') {
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
  }

  animate() {
    const fps = 24;
    const fpsInterval = 1000 / fps;
    let then = performance.now();
    console.log('fighter animation');

    function animate() {
      this.requestAnimationFrameId = requestAnimationFrame(animate.bind(this));

      const now = performance.now();
      const elapsed = now - then;

      if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);
        if (this.opponent.action !== 'ko') {
          this.update();
        }
        this.canvas.clear();
        this.canvas.drawBackground('gray');
        this.draw();
      }
    }

    document.addEventListener('keydown', this.handleKeyDown, false);
    animate.call(this);
  }
}

export default Fighter;
