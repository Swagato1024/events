const EventEmitter = require("events");

class SourovEventEmitter {
  constructor() {
    this.listeners = {};
  }

  on(event, callback) {
    this.listeners[event] = (this.listeners[event] || []).concat(callback);
  }

  emit(event) {
    this.listeners[event]?.forEach((listener) => {
      listener();
    });
  }
}

const em = new SourovEventEmitter();

em.on("debu", () => console.log("debu"));
em.emit("debu");
em.emit("debu");
em.on("sourov", () => console.log("sourov"));
em.emit("sourov");
