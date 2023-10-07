require("dotenv").config({ path: `.env${process.env.ENV_CONFIG}` });
const { defineConfig } = require("cypress");
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
const { pa11y } = require("@cypress-audit/pa11y");
const now = new Date();

module.exports = defineConfig({
  projectId: "vwviug",
  modifyObstructiveCode: true,
  chromeWebSecurity: false,

  defaultCommandTimeout: 8000,
  pageLoadTimeout: 30000,
  execTimeout: 60000,
  requestTimeout: 15000,
  responseTimeout: 15000,

  reporter: "mochawesome",
  reporterOptions: {
    timestamp: (now, "UTC:h:MM:ss TT Z")
  },

  viewportWidth: 1000,
  viewportHeight: 600,
  waitForAnimation: true,

  retries: {
    runMode: 1,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // config.baseUrl = process.env.URL;
      config.env.url = process.env.URL;
      config.env.environment = process.env.ENVIRONMENT;
      config.env.username = process.env.USERNAME;
      config.env.password = process.env.PASSWORD;
      config.env.emailId = process.env.EMAIL_ID;
      config.env.key = process.env.KEY;

      console.log(`Tests are running on ${config.env.ENVIRONMENT} environment`);

      require('@cypress/grep/src/plugin')(config);

      addMatchImageSnapshotPlugin(on, config);

      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on("task", {
        lighthouse: lighthouse(),
        pa11y: pa11y(console.log.bind(console)),
      });

      return config;
    },
    env: {
      URL:"https://the-internet.herokuapp.com",
      ENVIRONMENT:"default",
      USERNAME:"tomsmith",
      PASSWORD:"SuperSecretPassword!",
      EMAIL_ID:"sample@test.com"
    },

    specPattern: "cypress/e2e/herokuapp/*.cy.js",
    supportFile: "cypress/support/e2e.js",
  },
});
