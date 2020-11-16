const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

function fade() {
  let alpha = 0;

  function transition() {
    if (alpha < 1) {
      alpha += 0.01;
      ctx.globalAlpha = alpha;
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      requestAnimationFrame(transition);
    }
  }

  transition();
}

export default fade;
