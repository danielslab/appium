const wdio = require("webdriverio");

const opts = {
  port: 4723,
  desiredCapabilities: {
    platformName: "Android",
    platformVersion: "6.0",
    deviceName: "Nexus_5X_API_23",
    app: "D:\\projects\\appium\\ApiDemos-debug.apk",
    automationName: "UiAutomator2"
  }
};

const client = wdio.remote(opts);

client
  .init()
  .click("~App")
  .click("~Alert Dialogs")
  .back()
  .back()
  .end();