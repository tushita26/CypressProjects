

describe('XPathLocators', () => {

    it('find no of products', () => {
        cy.visit("https://www.automationexercise.com/")
        cy.xpath("//a[@href='/products']").click()
        cy.xpath("//div[@class='col-sm-4']").should('have.length',35)

    })

    it('chained xpath', () => {   //does not work
        cy.visit("https://www.automationexercise.com/")
        cy.xpath("//a[@href='/products']").click()
        cy.xpath("//div[@class='col-sm-4']").xpath("./div[@class='product-image-wrapper']").should('have.length',34)

    })
})