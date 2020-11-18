const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// load images
const images = {};
images.fighter = new Image();
images.fighter.src = '../../assets/fighter.png';

export default class Fighter {
  /*
    width: single sprite px width
    height: single sprite px height
    frame: {
      x: sprite sheet col,
      y: sprite sheet row,
      minX: starting frame of an animation,
      maxX: ending frame of an animation
    }
    pos: {
      x: canvas col,
      y: canvas row
    }

  */

  constructor() {
    this.width = 64;
    this.height = 63;
    this.frameX = 0;
    // this.x = Math.random() * canvas.width - this.width;
    // this.y = Math.random() * canvas.height - this.height;
    this.x = 40;
    this.y = 100;
    // this.speed = Math.random() * 2 + 3;
    this.minFrame = 0;
    this.characterActions = ['idle', 'punch right'];
    // this.action = this.characterActions[
    //   Math.floor(Math.random() * this.characterActions.length)
    // ];
    this.action = 'idle';
    switch (this.action) {
      case 'idle':
        this.frameY = 0;
        this.minFrame = 0;
        this.maxFrame = 9;
        break;
      case 'punch right':
        this.frameY = 1;
        this.minFrame = 0;
        this.maxFrame = 5;
        break;
      default:
        break;
    }
  }

  draw() {
    ctx.drawImage(
      images.fighter,
      this.width * this.frameX,
      this.height * this.frameY,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );

    if (this.frameX < this.maxFrame) {
      this.frameX += 1;
    } else {
      this.frameX = this.minFrame;
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
  //     if (this.y < 0 - this.height * 5) {
  //       this.y = canvas.height + this.height;
  //       this.x = Math.random() * canvas.width;
  //       this.speed = Math.random() * 2 + 3;
  //     } else {
  //       this.y -= this.speed;
  //     }
  //   } else if (this.action === 'top right') {
  //     if (this.y < 0 - this.height && this.x > canvas.width + this.width) {
  //       this.y = canvas.height + this.height;
  //       this.x = Math.random() * canvas.width;
  //       this.speed = Math.random() * 2 + 3;
  //     } else {
  //       this.y -= this.speed;
  //       this.x += this.speed;
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
