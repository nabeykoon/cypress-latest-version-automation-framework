/// <reference types="Cypress" />

describe("Iterate over elements", () => {

    beforeEach(() => {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    })

    it("Log information of all haircare products", () => {
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            cy.log("Index: " + index+ " : " + $el.text());
        })

    });

    it("Add specific product to basket", () => {
        // cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        //     if($el.text() === 'Curls to straight Shampoo'){
        //         cy.wrap($el).click();
        //     }
        // })

        //use common method defined in commands.js instead od above code block
        cy.selectProduct("Curls to straight Shampoo");
    });

    it("Add another specific product to basket", () => {
        cy.selectProduct("Eau Parfumee au The Vert Shampoo");
    });
})