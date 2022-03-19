/// <reference types="Cypress" />

//Returns error due to two domains accessed within same test.
describe.skip("Cypress web security", () => {
    it("Validate visiting two different domains", ()=>{
        cy.visit("http://www.webdriveruniversity.com/");
        cy.visit("https://automationteststore.com/");
        
    })
//returns error even though accessed via UI control. //Adding "chromeWebSecurity": false to cypress.json will allow to run this test
    it("Validate visiting two different domains via user actions", ()=>{
        cy.visit("http://www.webdriveruniversity.com/");
        cy.get("#automation-test-store").invoke("removeAttr", "target").click();  
    })

})