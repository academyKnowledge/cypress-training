/// <reference types="cypress" />
describe('commands', () => {
    it('example', () => {
        cy.visit("https://trello.com/")
        cy.findByTestId("logo_link").first()
    });
});