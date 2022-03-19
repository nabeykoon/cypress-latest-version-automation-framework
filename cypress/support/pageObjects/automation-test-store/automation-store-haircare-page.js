class AutomationStoreHaircarePage {
    addHaircareProductsToBaskets() {
        globalThis.data.productName.forEach((name) => {
            cy.addProductToBasket(name).then(() => {
                //debugger
            })
        })
    }
}
export default AutomationStoreHaircarePage;