import secretConfig from "./secret.config.js";
import express from "express";
import twilio from "twilio";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = 2392;

const { AccessToken } = twilio.jwt;
const { VoiceGrant } = AccessToken;

// Config stuff
const accountSid = secretConfig.creds.live.sid;
const apiKeySid = secretConfig.creds.live.apiKeySid;
const apiKeySecret = secretConfig.creds.live.apiKeySecret;
const twimlAppSid = secretConfig.creds.live.twimlAppSid;
const NUMBER_TO_DIAL = secretConfig.phoneNumber.my;
const CALLER_ID = secretConfig.phoneNumber.twilio;

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/token", (req, res) => {
  const identity = "browser-user";
  const token = new AccessToken(accountSid, apiKeySid, apiKeySecret, {
    identity,
  });
  const voiceGrant = new VoiceGrant({
    outgoingApplicationSid: twimlAppSid,
  });
  token.addGrant(voiceGrant);
  res.json({ token: token.toJwt() });
});

app.get("/voice", (req, res) => {
  console.log("Twilio is calling you...");
  const twiml = new twilio.twiml.VoiceResponse();
  const dial = twiml.dial({ callerId: CALLER_ID });
  dial.number(NUMBER_TO_DIAL);
  res.type("text/xml");
  res.send(twiml.toString());
});

app.listen(port, () => {
  console.log("http://localhost:" + port);
});
