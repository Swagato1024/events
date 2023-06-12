class ReadStdin {
  #delay;
  #eventHandler;

  constructor(delay) {
    this.#delay = delay;
    this.#eventHandler = { data: [], end: [] };
  }

  on(eventName, callback) {
    this.#eventHandler[eventName]?.push(callback);
  }

  start() {
    process.stdin.setEncoding("utf-8");

    const watchStdin = () => {
      const chunk = process.stdin.read();

      if (chunk) {
        this.#eventHandler.data.forEach((event) => {
          event(chunk);
        });
      }

      if (process.stdin._readableState.ended) {
        clearInterval(intervalId);
        this.#eventHandler.end.forEach((event) => event());
      }
    };

    const intervalId = setInterval(watchStdin, this.#delay);
  }
}

const reader = new ReadStdin(1000);
reader.on("data", (data) => console.log(`-> ${data}`));
reader.on("end", () => console.log("ended"));
reader.on("complete", () => console.log("completed"));
reader.start();
