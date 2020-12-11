class Fighter {
  /*
    size: {
      width: single sprite px width
      height: single sprite px height
    }
    pos: {
      x: canvas col,
      y: canvas row
    }
    frame: {
      x: sprite sheet col,
      y: sprite sheet row,
      min: starting frame of an animation,
      max: ending frame of an animation
    }
  */

  constructor(
    canvas,
    door,
    loseTransition,
    { fighterSelf, fighterOpponent, fighterBackground }
  ) {
    this.canvas = canvas;
    this.door = door;
    this.loseTransition = loseTransition;
    this.assets = { fighterSelf, fighterOpponent, fighterBackground };

    this.transitionText = 'win';

    this.handleKeyDown = this.handleKeyDown.bind(this);

    // background
    this.background = {
      size: {
        width: 359,
        height: 270,
      },
      pos: {
        x: 0,
        y: 0,
      },
      frame: {
        x: 0,
        y: 0,
        min: 0,
        max: 5,
      },
    };

    // self

    this.self = {
      size: {
        width: 1674 / 10,
        height: 160,
      },
      pos: {
        x: 55,
        y: 60,
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
        width: 2857 / 14,
        height: 200,
      },
      pos: {
        x: 175,
        y: 33,
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
          this.opponent.frame.max = 13;
        },
      },
      action: 'dizzy',
    };

    // set up initial actions

    this.self.actions.idle();
    this.opponent.actions.dizzy();

    //
    this.fps = 24;

    this.punchCounter = 0;
    this.punchTarget = 10;

    this.timeLeft = 5;
    this.countDownCounter = 0;
    this.stopTimer = false;
  }

  randomAttack() {
    return this.self.attacks[
      Math.floor(Math.random() * this.self.attacks.length)
    ];
  }

  lose() {
    this.stopTimer = true;
    document.removeEventListener('keydown', this.handleKeyDown, false);

    setTimeout(() => {
      cancelAnimationFrame(window.requestAnimationFrameId);
      this.loseTransition.animate();
    }, 3000);
  }

  countDown() {
    this.countDownCounter += 1;

    if (this.countDownCounter > this.fps && !this.stopTimer) {
      this.timeLeft -= 1;
      this.countDownCounter = 0;
    }

    this.canvas.drawText(
      `${this.timeLeft}`,
      370 * this.canvas.scaleFactor,
      30 * this.canvas.scaleFactor,
      24
    );

    if (!this.timeLeft) {
      this.lose();
    }
  }

  draw() {
    this.canvas.drawAnimation(
      this.assets.fighterBackground,
      this.background.size.width * this.background.frame.x,
      this.background.size.height * this.background.frame.y,
      this.background.size.width,
      this.background.size.height,
      this.background.pos.x,
      this.background.pos.y,
      400,
      300
    );

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

    // update background frame
    if (this.background.frame.x < this.background.frame.max) {
      this.background.frame.x += 1;
    } else {
      this.background.frame.x = this.background.frame.min;
    }

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

  win() {
    this.stopTimer = true;
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
    setTimeout(() => {
      cancelAnimationFrame(window.requestAnimationFrameId);
      document.removeEventListener('keydown', this.handleKeyDown, false);
      this.door.animate();
    }, 3000);
  }

  update() {
    if (this.punchCounter < this.punchTarget) {
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
      this.win();
    }
  }

  handleKeyDown(e) {
    function validKeyDown() {
      return !e.repeat && e.key === 'z';
    }

    e.preventDefault();

    if (validKeyDown()) {
      this.punchCounter += 1;
      console.log(this.punchCounter);

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

  reset() {
    this.opponent.action = 'dizzy';
    this.opponent.actions.dizzy();

    this.punchCounter = 0;
    this.punchTarget = 10;

    this.stopTimer = false;
    this.timeLeft = 5;
    this.countDownCounter = 0;
  }

  play() {
    let lastDrawTime = performance.now();
    const fpsInterval = 1000 / this.fps;

    const animate = () => {
      window.requestAnimationFrameId = requestAnimationFrame(animate);
      const currentTime = performance.now();
      const timeSinceLastDraw = currentTime - lastDrawTime;

      if (timeSinceLastDraw > fpsInterval) {
        lastDrawTime = currentTime - (timeSinceLastDraw % fpsInterval);

        if (this.opponent.action !== 'ko') {
          this.update();
        }
        this.canvas.clear();
        this.draw();
        this.countDown();
      }
    };

    this.reset();
    document.addEventListener('keydown', this.handleKeyDown, false);
    animate();
  }
}

export default Fighter;
