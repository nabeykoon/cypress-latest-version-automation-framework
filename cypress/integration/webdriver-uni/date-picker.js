/// <reference types="Cypress" />
describe("Test via webdriver uni", () => {
    beforeEach(() => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });
    })
    it("Select date from date picker", () => {

        /*          let date1 = new Date();
                date1.setDate(date1.getDate()); //get current day
                cy.log(date1.getDate());
        
                let date2 = new Date();
                date2.setDate(date2.getDate() + 5);
                cy.log(date2.getDate());  */



        var date = new Date();
        date.setDate(date.getDate() + 360);

        var futureYear = date.getFullYear();
        var futureMonth = date.toLocaleString("default", { month: "long" });
        var futureDay = date.getDate();

        cy.get("#datepicker").click();

        function selectMonthAndYear() {
            cy.get(".datepicker-dropdown").find(".datepicker-switch").first().then(($currentMonth) => {
                if (!$currentMonth.text().includes(futureYear)) {
                    cy.get(".next").first().click();
                    selectMonthAndYear();
                }
            }).then(() => {
                cy.get(".datepicker-dropdown").find(".datepicker-switch").first().then(($currentMonth) => {
                    if (!$currentMonth.text().includes(futureMonth)) {
                        cy.get(".next").first().click();
                        selectMonthAndYear();
                    }
                })
            })
        }

        function selectFutureDay() {
            cy.get("[class='day']").contains(futureDay).click();

        }

        selectMonthAndYear();
        selectFutureDay();

    });
});
