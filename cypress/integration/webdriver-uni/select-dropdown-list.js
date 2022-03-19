/// <reference types="Cypress" />

describe("Interact with dropdown lists via webdriver uni", () => {
    it("Select specific values via select dropdown list", ()=>{
        
        cy.visit("http://www.webdriveruniversity.com/");
        // invoke jQuery method 'removeAttr' to remove attribute "target="_blank" which triggered the new tab opening after click on the link
        cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click();

        //select by value
        cy.get("#dropdowm-menu-1").select("c#");
        cy.get("#dropdowm-menu-2").select("testng").should("have.value", "testng");
        //select by text of element
        cy.get("#dropdowm-menu-3").select("JQuery").contains("JQuery");
        
    })
    
})