const EventEmitter = require("events");
const { eventNames } = require("process");
// const { eventNames } = require("process");

const emitter = new EventEmitter();

// emitter.on("anything", (data) => {
//   console.log("ON: anything", data);
// });
// emitter.emit("anything", { a: 1 });
// emitter.emit("anything", { b: 2 });
// setTimeout(() => {
//   emitter.emit("anything", { c: 3 });
// }, 3000);

class Dispatcher extends EventEmitter {
  subscribe(eventName, cb) {
    console.log("[Subscribe...]");
    this.on(eventName, cb);
  }
  dispath(eventName, data) {
    console.log("[Dispatching...]");
    this.emit(eventName, data);
  }
}
const dis = new Dispatcher();

dis.subscribe("aa", (data) => {
  console.log("ON: aa", data);
});
dis.dispath("aa", { aa: 22 });
