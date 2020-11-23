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

  constructor() {
    this.width = 65;
    this.height = 78;
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
    // this.frame.x = 0;
    // this.pos.x = Math.random() * canvas.width - this.width;
    // this.pos.y = Math.random() * canvas.height - this.height;
    // this.pos.x = 40;
    // this.pos.y = 100;
    // this.speed = Math.random() * 2 + 3;
    // this.frame.min = 0;
    this.characterActions = ['idle', 'punch right'];
    // this.action = this.characterActions[
    //   Math.floor(Math.random() * this.characterActions.length)
    // ];
    this.action = 'punch right';
    switch (this.action) {
      case 'idle':
        this.frame.y = 0;
        this.frame.min = 0;
        this.frame.max = 9;
        break;
      case 'punch right':
        this.frame.y = 1;
        this.frame.min = 0;
        this.frame.max = 5;
        break;
      default:
        break;
    }
  }

  draw(ctx, { fighter }) {
    ctx.drawImage(
      fighter,
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
