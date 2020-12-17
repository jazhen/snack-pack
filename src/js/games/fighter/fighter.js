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

  constructor() {
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

    this.timeLeft = 10;
    this.countDownCounter = 0;
    this.stopTimer = false;
    this.status = 'undefined';
  }

  randomAttack() {
    return this.self.attacks[
      Math.floor(Math.random() * this.self.attacks.length)
    ];
  }

  countDown() {
    this.countDownCounter += 1;

    if (this.countDownCounter > this.fps && !this.stopTimer) {
      this.timeLeft -= 1;
      this.countDownCounter = 0;
    }

    window.canvas.drawText(
      `${this.timeLeft}`,
      370 * window.canvas.scaleFactor,
      30 * window.canvas.scaleFactor,
      24
    );

    if (!this.timeLeft) {
      this.lose();
    }
  }

  draw() {
    window.canvas.drawAnimation(
      window.assets.fighterBackground,
      this.background.size.width * this.background.frame.x,
      this.background.size.height * this.background.frame.y,
      this.background.size.width,
      this.background.size.height,
      this.background.pos.x,
      this.background.pos.y,
      window.BASE_WIDTH,
      window.BASE_HEIGHT
    );

    window.canvas.drawAnimation(
      window.assets.fighterSelf,
      this.self.size.width * this.self.frame.x,
      this.self.size.height * this.self.frame.y,
      this.self.size.width,
      this.self.size.height,
      this.self.pos.x,
      this.self.pos.y,
      this.self.size.width,
      this.self.size.height
    );

    window.canvas.drawAnimation(
      window.assets.fighterOpponent,
      this.opponent.size.width * this.opponent.frame.x,
      this.opponent.size.height * this.opponent.frame.y,
      this.opponent.size.width,
      this.opponent.size.height,
      this.opponent.pos.x,
      this.opponent.pos.y,
      this.opponent.size.width,
      this.opponent.size.height
    );

    window.canvas.drawRect(
      this.opponent.pos.x + 30,
      this.opponent.pos.y + 20,
      80,
      5,
      '#222222',
      '#222222'
    );

    window.canvas.drawRect(
      this.opponent.pos.x + 30,
      this.opponent.pos.y + 20,
      80 * ((this.punchTarget - this.punchCounter) / this.punchTarget),
      5,
      '#F43E3E'
    );

    if (this.status === 'win') {
      window.canvas.drawWinOverlay();
    }

    if (this.status === 'lose') {
      window.canvas.drawLoseOverlay();
    }

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

  lose() {
    this.status = 'lose';
    this.stopTimer = true;
    document.removeEventListener('keydown', this.handleKeyDown, false);

    setTimeout(() => {
      cancelAnimationFrame(window.requestAnimationFrameId);
      window.loseTransition.animate();
    }, 3000);
  }

  win() {
    this.status = 'win';
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
    // go to gameTransition animation
    setTimeout(() => {
      cancelAnimationFrame(window.requestAnimationFrameId);
      document.removeEventListener('keydown', this.handleKeyDown, false);
      window.ROUND_NUM += 1;
      window.gameTransition.animate();
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
      return !e.repeat && e.key === ' ';
    }

    e.preventDefault();

    if (validKeyDown() && this.punchCounter !== this.punchTarget) {
      this.punchCounter += 1;

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
    this.punchTarget = 10 + Math.floor(window.ROUND_NUM / 3) * 5;

    this.stopTimer = false;
    this.timeLeft = 10;
    this.countDownCounter = 0;
    this.status = 'undefined';

    document.addEventListener('keydown', this.handleKeyDown, false);
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

        window.canvas.clear();
        if (this.opponent.action !== 'ko') {
          this.update();
        }
        this.draw();

        if (window.ROUND_NUM >= window.gameTransition.games.length) {
          this.countDown();
        }
      }
    };

    this.reset();
    animate();
  }
}

export default Fighter;
