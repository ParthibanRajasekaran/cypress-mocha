class LandingPage {
  elements = {
    pageHeader: () => cy.get("h1.heading"),
    pageSubHeader: () => cy.get("h2"),
    dropdownLink: () => cy.get('li a[href="/dropdown"]'),
    checkboxLink: () => cy.get('li a[href="/checkboxes"]'),
    formAuthentificationLink: () => cy.get('li a[href="/login"]'),
  };

  getPageHeader() {
    return this.elements.pageHeader();
  }

  getPageSubHeader() {
    return this.elements.pageSubHeader();
  }

  navigateToFormAuthentificationPage() {
    this.elements.formAuthentificationLink().click();
  }

  navigateToCheckboxPage() {
    this.elements.checkboxLink().click();
  }

  navigateToDropdownPage() {
    this.elements.dropdownLink().click();
  }
}

// module.exports = new LoginPage();
module.exports = new LandingPage();
