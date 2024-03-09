/// <reference types="cypress" />
describe('Screenshot', () => {
    before(()=>{
        const email = "CypressUser@gmail.com"; 
        const password = "test@123"
        cy.loginToMagento(email,password)
        cy.screenshot({capture:"viewport"})
    })

    it('Add to wishlist', () => {
        cy.get("#search").type("shirt"+"{enter}");
        cy.screenshot({capture:"fullPage"})
        cy.contains("a","Circe Hooded Ice Fleece").click();
        cy.get(".product-addto-links").find("a").first().click()
        cy.get("[role=alert]").should("be.visible").and("contain","Circe Hooded Ice Fleece has been added to your Wish List. Click here to continue shopping")
        
    });
    
})