import { Device } from "@twilio/voice-sdk";

let device = null;
let identity = null;

// function that runs when enter is pressed in the digits input
document.getElementById("digits").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    makeCall();
  }
});

document.getElementById("call").addEventListener("click", function () {
  makeCall();
});

function makeCall() {
  const phoneNumber = "+" + document.getElementById("digits").value;
  if (!identity) {
    // Generate a token and identity with the phone number.
    fetch("/token?phoneNumber=" + encodeURIComponent(phoneNumber))
      .then((res) => res.json())
      .then((data) => {
        device = new Device(data.token);
        identity = data.identity;
        device.on("ready", () => console.log("device ready"));
        device.on("error", (e) => console.log("device error", e));
        device.on("connect", () => console.log("device connect"));
        device.connect();
      });
  } else {
    // Don't generate a token, just update the identity with the new phone number.
    fetch(
      "/updatePhoneNumber?identity=" +
        encodeURIComponent(identity) +
        "&phoneNumber=" +
        encodeURIComponent(phoneNumber)
    ).then(() => {
      device.connect();
    });
  }
}
