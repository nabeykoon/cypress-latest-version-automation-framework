/// <reference types="Cypress" />

describe("Inspect automation test store items using chain of commands", () => {

  it.only("Click on the first item using item header", () => {
    cy.visit("https://automationteststore.com/");
    //cy.get('a[title="Skinsheen Bronzer Stick"]').click();
    cy.get(".prdocutname")
      .contains("Skinsheen Bronzer Stick")
      .click()
      .then(function (itemHeaderText) {
        cy.log("Selected the following item " + itemHeaderText.text());
      });
      
    cy.eyesOpen({
      appName: "Automation Store",
      testName: "inspect item",
      browser: [
        {name: 'chrome', width: 1024, height: 768},
        {name: 'firefox', width: 1024, height: 768},
      ]
    });
    cy.wait(3000);
    cy.eyesCheckWindow({tag: 'item widget page'});
    cy.eyesClose();
  });

  it("Click on the first item using index", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".fixed_wrapper").find(".prdocutname").eq(0).click();
  });
});
