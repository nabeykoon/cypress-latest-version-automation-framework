/// <reference types="Cypress" />
describe("Handling data via webdriver uni", () => {
    beforeEach(() => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    })
    it("Calculate and assert the total age of all users", () => {
        var userDetails = [];
        let num = 0;
        cy.get("#thumbnail-1 td").each(($el, index, $list) => {
            userDetails[index] = $el.text();
        }).then(() => {
            var i;
            for (i = 0; i < userDetails.length; i++) {
                //cy.log(userDetails[i]);
                if (Number(userDetails[i])) {
                    num += Number(userDetails[i])
                }
            }
            cy.log("Total age: " + num);
            expect(num).to.eq(322);
        })
    });

    it.only("Assert the age of a given user based on last name", () => {
        cy.get("#thumbnail-1 tr td:nth-child(2)").each(($el, index, $list) => {
            const lastName = $el.text();
            if (lastName.includes("Woods")) {
                cy.get("#thumbnail-1 tr td:nth-child(2)").eq(index).next().then(($age) => {
                    const userAge = $age.text();
                    expect(userAge).to.equal("80");
                })
            }
        })
    });
});
