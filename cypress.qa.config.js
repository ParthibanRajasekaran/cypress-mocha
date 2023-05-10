const baseConfig = require('./cypress.config');

module.exports = {
    ...baseConfig,
    env: {
        ENVIRONMENT: "qa",
        AMOUNT: "0.02",
        EMAIL_ID: "qa@test.com"
    }
};