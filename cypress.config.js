const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature", // for Cucumber
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber()); // for Cucumber
      on('before:browser:launch', (browser = {}, launchOptions) => {
        /* Set incognito mode for chrome browser */
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          launchOptions.args.push("--incognito")
          return launchOptions
        }
        /* // end of incognito mode chrome browser config */
      })
    },
  },
});