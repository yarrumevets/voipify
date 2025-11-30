import { Device } from "@twilio/voice-sdk";

let device = null;

document.getElementById("call").addEventListener("click", function () {
  const phoneNumber = document.getElementById("phone").value;

  if (!device) {
    fetch("/token?phoneNumber=" + encodeURIComponent(phoneNumber))
      .then((res) => res.json())
      .then((data) => {
        device = new Device(data.token);
        device.on("ready", () => console.log("device ready"));
        device.on("error", (e) => console.log("device error", e));
        device.on("connect", () => console.log("device connect"));
        device.connect();
      });
  } else {
    fetch("/token?phoneNumber=" + encodeURIComponent(phoneNumber)).then(() => {
      device.connect();
    });
  }
});
