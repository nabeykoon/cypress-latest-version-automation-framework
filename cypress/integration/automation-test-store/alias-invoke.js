/// <reference types="Cypress" />

describe("Alias and invoke", () => {
    it("Validate specific hair care product", () => {

        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke("text").as("productThumbnail");
        cy.get("@productThumbnail").its("length").should("be.greaterThan", 5);
        cy.get("@productThumbnail").should("include", "Seaweed Conditioner");
    });

    it("Validate number of Thumbnail in the homepage", () => {

        cy.visit("https://automationteststore.com/");
        cy.get(".thumbnail").as("productThumbnails");
        cy.get("@productThumbnails").its("length").should("equal", 16);
        //OR
        cy.get("@productThumbnails").should("have.length", 16);

        //Get the thumbnail add to cart icon title
        cy.get("@productThumbnails").find(".productcart").invoke("attr", "title").should("include", "Add to Cart");
    });

    it.only("Calculate total price of normal and sale products", () => {

        cy.visit("https://automationteststore.com/");
        cy.get(".thumbnail").as("productThumbnails");
/*         cy.get("@productThumbnails").find(".oneprice").each(($el, index, $list) => {
            cy.log($el.text());
    }) */

    cy.get("@productThumbnails").find(".oneprice").invoke("text").as("itemPrice");
    cy.get("@productThumbnails").find(".pricenew").invoke("text").as("saleItemPrice");
    var allItemsTotal = 0;
    cy.get("@itemPrice").then($linkText => {
        var itemPrice = $linkText.split("$");
        var i;
        var totalNonSaleItemsPrice = 0;
        for (i = 0; i < itemPrice.length; i++) {
            cy.log(itemPrice[i]);
            totalNonSaleItemsPrice += Number(itemPrice[i]);
           
        }
        allItemsTotal += totalNonSaleItemsPrice;
        cy.log("Non sale items total price: " + totalNonSaleItemsPrice);
    })

    cy.get("@saleItemPrice").then($linkText => {
        var saleItemPrice = $linkText.split("$");
        var i;
        var totalSaleItemsPrice = 0;
        for (i = 0; i < saleItemPrice.length; i++) {
            cy.log(saleItemPrice[i]);
            totalSaleItemsPrice += Number(saleItemPrice[i]);
           
        }
        allItemsTotal += totalSaleItemsPrice;
        cy.log("Sale items total price: " + totalSaleItemsPrice);
        
    }).then(() => {
        cy.log("Total price of all items: " + allItemsTotal);
        expect(allItemsTotal).to.equal(616.7);

    })

    
});
})