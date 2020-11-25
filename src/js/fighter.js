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
    // this.characterActions = ['idle', 'punch right'];
    // this.action = 'idle';

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

    // switch (this.action) {
    //   case 'idle':
    //     this.frame.y = 0;
    //     this.frame.min = 0;
    //     this.frame.max = 9;
    //     break;
    //   case 'punch right':
    //     this.frame.y = 1;
    //     this.frame.min = 0;
    //     this.frame.max = 5;
    //     break;
    //   default:
    //     break;
    // }
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

  animate() {
    function animate() {
      this.canvas.clear();
      this.canvas.drawBackground('gray');
      this.draw();
      this.requestAnimationFrameId = requestAnimationFrame(animate.bind(this));
    }

    // const repeat = false;

    // document.addEventListener('keyup', (e) => {
    //   // repeat = false;
    //   this.actions.idle();
    // });

    // document.addEventListener('keydown', (e) => {
    //   // repeat = true;
    //   if (e.repeat) {
    //     console.log('repeat');
    //     return;
    //   }
    //   // debugger;
    //   if (!e.repeat && e.keyCode === 32) {
    //     this.actions.punch();
    //   }
    // });

    animate.call(this);
  }

  // update() {
  //   switch (this.action) {
  //     case 'idle':
  //       break;
  //     case 'punch right':
  //       break;
  //     default:
  //       break;
  //   }
  //   if (this.action === 'up') {
  //     if (this.pos.y < 0 - this.height * 5) {
  //       this.pos.y = canvas.height + this.height;
  //       this.pos.x = Math.random() * canvas.width;
  //       this.speed = Math.random() * 2 + 3;
  //     } else {
  //       this.pos.y -= this.speed;
  //     }
  //   } else if (this.action === 'top right') {
  //     if (this.pos.y < 0 - this.height && this.pos.x > canvas.width + this.width) {
  //       this.pos.y = canvas.height + this.height;
  //       this.pos.x = Math.random() * canvas.width;
  //       this.speed = Math.random() * 2 + 3;
  //     } else {
  //       this.pos.y -= this.speed;
  //       this.pos.x += this.speed;
  //     }
  //   }
  // }
}

// for (let i = 0; i < numberOfCharacters; i++) {
//   characters.push(new Fighter());
// }

// function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
//   ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
// }

// const character = new Fighter();
// function animate() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   // for (let i = 0; i < characters.length; i++) {
//   //   characters[i].draw();
//   //   characters[i].update();
//   // }
//   character.draw();
//   // character.update();
// }

// window.onload = setInterval(animate, 1000 / 20);

export default Fighter;
