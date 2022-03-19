/// <reference types="Cypress" />

describe("Validate webdriver uni homepage links", () => {
    it("Confirm links redirects to the correct pages", ()=>{
        
        cy.visit("http://www.webdriveruniversity.com/");
        // invoke jQuery method 'removeAttr' to remove attribute "target="_blank" which triggered the new tab opening after click on the link
        cy.get("#contact-us").invoke("removeAttr", "target").click();
         // older cypress version Ex: 4.5.0, you should use click with argument click({force: true}) since this element dimension is 0X0 pixels and it is not visible.
        cy.url().should("include", "contactus");

        cy.go("back");
        cy.reload();
        //Reload without cache
        //cy.reload(true);
        cy.go("forward");
        cy.url().should("include", "contactus");
        cy.go("back");
        cy.get("#login-portal").invoke("removeAttr", "target").click(); 
        cy.url().should("include", "Login-Portal");
        cy.go("back");

        cy.get("#to-do-list").invoke("removeAttr", "target").click();
        cy.url().should("include", "To-Do-List");
        cy.go("back");

        
    })

})