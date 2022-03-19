/// <reference types="Cypress" />

describe("Verify Auto complete dropdown list via webdriver uni", () => {
    it("Select specific product via auto complete list", ()=>{
        
        cy.visit("http://www.webdriveruniversity.com/");
        // invoke jQuery method 'removeAttr' to remove attribute "target="_blank" which triggered the new tab opening after click on the link
        cy.get("#autocomplete-textfield").invoke("removeAttr", "target").click();
        cy.get("#myInput").type("A");

        //Can select item from list without iterating using following way.
        //cy.get("#myInputautocomplete-list").find("input[value = 'Avacado']").click({force: true});

        cy.get("#myInputautocomplete-list > div").each(($el, index, $list) => {
            const prod = $el.text();
            const productToSelect = "Almond";

            if (prod === productToSelect){
                $el.trigger("click");
                cy.get("#submit-button").click();
                cy.url().should("include", productToSelect);
            }
        }).then(() => {

            cy.get("#myInput").type("G");
            cy.get("#myInputautocomplete-list > div").each(($el, index, $list) => {
                const prod = $el.text();
                const productToSelect = "Grapes";
    
                if (prod === productToSelect){
                    $el.trigger("click");
                    cy.get("#submit-button").click();
                    cy.url().should("include", productToSelect);
                }
            })


        })
        
    })
    
})