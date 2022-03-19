class AutomationStoreHomePage {

    visitHomePage() {
        cy.visit("https://automationteststore.com/");
    }

    clickOnHaircareLink() {
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    }

}
export default AutomationStoreHomePage;