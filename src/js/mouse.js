class Mouse {
  static getCoord({ clientX, clientY }) {
    const element = window.canvas.canvas.getBoundingClientRect();

    return {
      x: clientX - element.left,
      y: clientY - element.top,
    };
  }
}

export default Mouse;
