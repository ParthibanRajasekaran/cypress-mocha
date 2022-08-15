class LoginPage {
  elements = {
    pageHeader: () => cy.get("h2"),
    pageDescription: () => cy.get("h4"),
    usernameField: () => cy.get("#username"),
    passwordField: () => cy.get("#password"),
    loginButton: () => cy.get("button.radius"),
    errorMessage: () => cy.get("#flash"),
  };

  getPageHeader() {
    return this.elements.pageHeader();
  }

  getPageDescription() {
    return this.elements.pageDescription();
  }

  enterUsername(username) {
    this.elements.usernameField().type(username);
  }

  enterPassword(password) {
    this.elements.passwordField().type(password);
  }

  clickLoginButton() {
    this.elements.loginButton().click();
  }

  getLoginFailureMessage() {
    return this.elements.errorMessage();
  }
}

module.exports = new LoginPage();
