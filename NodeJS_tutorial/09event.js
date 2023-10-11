//Nodejs works on event driven architecture
import EventEmitter from "events";

class MyEventEmitter extends EventEmitter {}

const myEventEmitter = new MyEventEmitter();

myEventEmitter.on("WaterFull", () => {
  console.log("turn off the motor");
  setTimeout(() => {
    console.log("turn off the motor, it's a gentle remainder");
  }, 3000);
});
myEventEmitter.emit("WaterFull");
