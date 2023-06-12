// Timer
const { EventEmitter } = require("events");

class Timer {
  #times;
  #emitter;

  constructor(emitter, times) {
    this.#times = times;
    this.#emitter = emitter;
  }

  addEventListener(listener) {
    this.#emitter.on("tick", listener);
  }

  start() {
    let counter = 0;

    const intervalId = setInterval(() => {
      this.#emitter.emit("tick", counter);
      counter++;

      if (counter > this.#times) clearInterval(intervalId);
    }, 1000);
  }
}

const isEven = (n) => (n % 2 === 0 ? "EVEN" : "ODD");
//TODO: isEven name

const timer = new Timer(new EventEmitter(), 10);
timer.addEventListener((n) => console.log((n / 10) * 100, "%"));
timer.addEventListener((n) => console.log(isEven(n)));

timer.start();
