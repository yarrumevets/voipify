# VoIPify

Minimal Node/Express + Twilio Voice app.

## Install

```bash
yarn
```

## Setup

1. Copy `SAMPLE.secret.config.js` to `secret.config.js`
2. Fill in your Twilio credentials (see Twilio setup below)

## Run

1. Build the front-end:

   ```bash
   yarn build
   ```

2. Start ngrok (in a separate terminal):

   ```bash
   ngrok http 2392
   ```

3. Start the server:

   ```bash
   node server.js
   ```

4. Open `http://localhost:2392` in your browser

## Twilio Setup

1. **Create a Twilio account**

   - Go to [Twilio](https://www.twilio.com/try-twilio) and sign up
   - Verify your email and phone number

2. **Get a Twilio phone number**

   - In the Twilio Console, go to **Phone Numbers → Manage → Buy a number**
   - Choose a number with **Voice** capability
   - This will be your `phoneNumber.twilio`

3. **Find your Account SID and Auth Token**

   - Go to the [Twilio Console Dashboard](https://console.twilio.com)
   - Copy **Account SID** (starts with `AC`) and **Auth Token**

4. **Create an API Key**

   - Go to [API Keys](https://console.twilio.com/us1/account/keys-credentials/api-keys/create)
   - Choose **Standard**, region **USA**
   - Copy the **API Key SID** (starts with `SK`) and **Secret**

5. **Create a TwiML App**

   - Go to [TwiML Apps](https://console.twilio.com/us1/develop/voice/manage/twiml-apps)
   - Create a new app
   - Set **Voice Request URL** to: `https://your-ngrok-url.ngrok.io/voice`
   - Copy the **TwiML App SID** (starts with `AP`)

6. **Choose your destination phone number**

   - This is the phone that should ring when you click the button (e.g. your mobile)
   - Must be in E.164 format (e.g. `+1234567890`)

7. **Put all values in `secret.config.js`**
   - `creds.live.sid`: Account SID (starts with `AC`)
   - `creds.live.token`: Auth Token
   - `creds.live.apiKeySid`: API Key SID (starts with `SK`)
   - `creds.live.apiKeySecret`: API Key Secret
   - `creds.live.twimlAppSid`: TwiML App SID (starts with `AP`)
   - `phoneNumber.twilio`: Your Twilio number (E.164 format, e.g. `+1234567890`)
   - `phoneNumber.my`: Your destination phone number (E.164 format, e.g. `+1234567890`)
