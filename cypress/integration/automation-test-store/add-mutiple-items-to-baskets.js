import AutomationStoreHomePage from '../../support/pageObjects/automation-test-store/automation-store-home-page';
import AutomationStoreHaircarePage from '../../support/pageObjects/automation-test-store/automation-store-haircare-page';

/// <reference types="Cypress" />

describe("Add mutiple items to basket  ", () => {

    const automationStoreHomePage = new AutomationStoreHomePage();
    const automationStoreHaircarePage = new AutomationStoreHaircarePage();

    before(() => {
        cy.fixture("products").then((data) => {
            globalThis.data = data;
        })
    })

    beforeEach(() => {
        //cy.visit("https://automationteststore.com/");
        //cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

        //cy.clearLocalStorage();
        //cy.clearCookies();
        // Cypress runs above automatically before each test to prevent state from being shared across tests. Only use this if you want to clear inside a single test.
        automationStoreHomePage.visitHomePage();
        automationStoreHomePage.clickOnHaircareLink();
    })

    it("Add specific item to basket", () => {
        automationStoreHaircarePage.addHaircareProductsToBaskets();
        cy.get(".dropdown-toggle .cart_total").should("have.text", "$46.45").click().debug();
    });
})