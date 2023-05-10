const baseConfig = require('./cypress.config');

module.exports = {
    ...baseConfig,
    env: {
        ENVIRONMENT: "dev",
        AMOUNT: "0.05",
        EMAIL_ID: "dev@test.com"
    }
};
