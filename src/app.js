import { Device } from "@twilio/voice-sdk";

let device = null;

document.getElementById("call").addEventListener("click", function () {
  if (!device) {
    fetch("/token")
      .then((res) => res.json())
      .then((data) => {
        device = new Device(data.token);
        device.on("ready", () => console.log("device ready"));
        device.on("error", (e) => console.log("device error", e));
        device.on("connect", () => console.log("device connect"));
        device.connect();
      });
  } else {
    device.connect();
  }
});
