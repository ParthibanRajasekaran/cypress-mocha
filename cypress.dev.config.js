const baseConfig = require('./cypress.config');

module.exports = {
  ...baseConfig,
  env: {
    ...baseConfig.env,
    URL:"https://the-internet.herokuapp.com",
     v:"dev",
    USERNAME:"tomsmith",
    PASSWORD:"SuperSecretPassword!",
    EMAIL_ID:"sample@test.com"
  }
};
