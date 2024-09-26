
describe('CSSLocators', () => {

    it("CSSLocators", ()=> {
        cy.visit("https://www.automationexercise.com/")
        cy.get("a[href='/products']").click()
        cy.get("#search_product").type("T-shirts")
        cy.get("[id='submit_search']").click()
        cy.get("div.overlay-content").contains("Shirts")
       })
})