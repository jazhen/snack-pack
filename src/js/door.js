class Door {
  constructor({ door, doorBackground }) {
    this.assets = {
      door,
      doorBackground,
    };
    this.width = 1600 / 6;
    this.height = 400;
    this.frame = {
      x: 0,
      y: 0,
      min: 0,
      max: 5,
    };
    this.pos = {
      x: 0,
      y: 0,
    };

    this.requestAnimationFrameId = null;
    this.setTimeoutId = null;
  }

  draw(canvas) {
    canvas.ctx.drawImage(
      this.assets.doorBackground,
      this.pos.x,
      this.pos.y,
      canvas.canvas.width,
      canvas.canvas.height
    );

    canvas.ctx.drawImage(
      this.assets.door,
      this.width * this.frame.x,
      this.height * this.frame.y,
      this.width,
      this.height,
      this.pos.x,
      this.pos.y,
      canvas.canvas.width,
      canvas.canvas.height
    );

    canvas.drawText(
      'MASH',
      canvas.canvas.width / 2,
      (canvas.canvas.height * 2) / 3,
      'white',
      100
    );

    if (this.frame.x < this.frame.max) {
      this.frame.x += 1;
    } else {
      this.frame.x = this.frame.min;
    }
  }

  animate(canvas, bgColor, text, seconds, fps = 2) {
    function animate() {
      this.setTimeoutId = setTimeout(() => {
        canvas.clear();
        this.draw(canvas);

        this.requestAnimationFrameId = requestAnimationFrame(animate);
        console.log(this.requestAnimationFrameId);
      }, 1000 / fps);
    }

    // eslint-disable-next-line no-func-assign
    animate = animate.bind(this);
    animate();
  }

  cancelAnimation() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.setTimeoutId) {
          console.log('Stopping door animation');
          resolve(clearTimeout(this.setTimeoutId));
        } else {
          reject(new Error('Door.cancelAnimation() failed'));
        }
      }, 3000);
    });
  }

  // setScale(scaleFactor) {
  //   debugger;
  // }
}

export default Door;
