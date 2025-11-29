const secretConfig = {
  creds: {
    live: {
      sid: "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      token: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      apiKeySid: "SKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      apiKeySecret: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      twimlAppSid: "APXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    },
    test: {
      sid: "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      token: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    },
  },
  phoneNumber: {
    twilio: "+1XXXXXXXXXX",
    my: "+1XXXXXXXXXX",
  },
  openAi: {
    key: "sk-proj-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  },
};

export default secretConfig;
