class DropDownPage {
  elements = {
    pageHeader: () => cy.get("h3"),
    dropDownBox: () => cy.get("select#dropdown")
  };

  getPageHeader() {
    return this.elements.pageHeader();
  }

  selectOptionFromDownDown(optionNumber) {
  this.elements.dropDownBox().select(optionNumber);
  this.elements.dropDownBox().should('have.value', optionNumber);
}

}

module.exports = new DropDownPage();
