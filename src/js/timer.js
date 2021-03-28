class Timer {
  #time;
  #initialTime;

  constructor(time = 10) {
    this.#time = time;
    this.#initialTime = time;
  }

  isElapsed() {
    return this.#time === 0;
  }

  setElapsed() {
    this.#time = 0;
  }

  getTime() {
    return this.#time;
  }

  decrementTime() {
    if (this.#time > 0) this.#time -= 1;
  }

  reset() {
    this.#time = this.#initialTime;
  }
}

export default Timer;
