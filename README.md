# Welcome to Cypress-Mocha 🚀 : Your Guide to Effective Testing with Cypress and Mocha.

[![Cypress-mocha](https://img.shields.io/endpoint?url=https://cloud.cypress.io/badge/detailed/vwviug/main&style=flat&logo=cypress)](https://cloud.cypress.io/projects/vwviug/runs)

## Project Overview 📝

Welcome to the Cypress-Mocha project! This is a robust testing framework designed to simplify the process of creating, managing, and running your end-to-end (E2E) tests for web applications.

Built using the popular JavaScript testing libraries [Cypress](https://www.cypress.io/) and [Mocha](https://mochajs.org/), this project serves as a powerful tool for developers seeking a streamlined and intuitive testing environment. Whether you're implementing a handful of basic tests or managing a suite of complex testing scenarios, Cypress-Mocha has you covered.

Cypress provides a user-friendly setup and comprehensive API to help you write robust tests for your web application, while Mocha offers a flexible and feature-rich testing framework, allowing for synchronous and asynchronous test execution.

In this repository, you'll find example tests and configurations, as well as detailed instructions on how to create your own. With its focus on ease of use, readability, and efficiency, the Cypress-Mocha project aims to empower developers to deliver high-quality, bug-free web applications.

Whether you're a seasoned developer or just getting started with testing, Cypress-Mocha is a versatile tool to add to your development toolkit. Enjoy exploring and happy testing!

For additional details, don't forget to check out the official [Cypress documentation](https://docs.cypress.io), or discover their latest features [here](https://www.cypress.io/features/).

## Preparing for Takeoff 🚀

Ensure you have the following installed for the best user experience:

- [NPM](https://www.npmjs.com) - version 8+
- [Node](https://nodejs.org/en/download/) - version 16+

(Note: Node installation from the provided link also installs NPM.)

To confirm you have the correct versions, type these commands into your terminal:

```bash
npm --version
node --version
```

**IDE Installation:** [Visual Studio code / VS code](https://code.visualstudio.com)
Extensions suggested for optimal Cypress usage: https://docs.cypress.io/guides/tooling/IDE-integration#Visual-Studio-Code
Extensions for icon theme: https://marketplace.visualstudio.com/search?term=icon&target=VSCode&category=All%20categories&sortBy=Relevance

## First Steps 👣

1. Clone: https://github.com/ParthibanRajasekaran/cypress-mocha.git
2. Open the project in your favorite editor.
3. Launch a Terminal in your editor (usually found in the bottom right corner).
4. Install necessary dependencies by running:
```bash
npm install --save-dev
```
5. Verify your Cypress installation by launching the Test Runner:
```bash
npx cypress open
```
If all went well, the [Test Runner](https://docs.cypress.io/guides/core-concepts/test-runner#Overview) should appear. Here you can select the feature to execute and the browser to use.

In the test runner, select the feature to execute and the desired browser from the dropdown and visualize the test execution

## Running Tests 🧪

To run the tests via CLI on a headless mode

```bash
npx cypress run
```

To run the cypress tests with the Cipher tests
```bash
npx cypress run --env KEY=<<key>>
```

To run the tests via CLI with an .env (cypress-cucumber-html/.env)

```bash
npx cypress run --config-file cypress.dev.config.js
```

To run the tests via CLI with an .env (cypress-mocha/cypress.dev.config.js)

```bash
npx cypress run --reporter mochawesome --config-file cypress.dev.config.js
```

To run the tests via CLI with an .env (cypress-mocha/cypress.qa.config.js)

```bash
npx cypress run --reporter mochawesome --config-file cypress.qa.config.js
```

To run the tests via CLI with an env config

```bash
npx cypress run --reporter mochawesome --config-file cypress.dev.config.js --browser chrome
```

To run the tests via CLI and generate a execution report

```bash
npx cypress run --reporter mochawesome --config-file cypress.dev.config.js
```

To run tests with annotation @smoke
```bash
npx cypress run --reporter mochawesome --env grepTags='@smoke' --config-file cypress.dev.config.js
```

To run tests without annotation @smoke
```bash
npx cypress run --reporter mochawesome --env grepTags='-@smoke' --config-file cypress.dev.config.js
```

To run tests with combination of @annotation1 but without @smoke
```bash
npx cypress run --reporter mochawesome --env grepTags='@annotation1+-@smoke' --config-file cypress.dev.config.js
```


## Crafting Tests 🛠️

- Create page classes in **cypress / pages** and add locators and implementations to it (Only [CSS selectors](https://saucelabs.com/resources/articles/selenium-tips-css-selectors) can be used as locators)
- Create a folder wthin e2e and a test class with extension **\*.cy.js** (\_Eg. XYZ.cy.js)

## Further Reading 📚

[Cypress Cheat Sheet](https://chercher.tech/cypress-io/cheat-sheet-cypress-io)