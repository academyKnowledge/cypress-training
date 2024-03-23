// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginToMagento',()=>{
    cy.visit("/customer/account/login/");
    cy.fixture("magentoData").then((data)=>{
        cy.get("#email").type(data.email)
        cy.get("#pass").type(data.password)
    })
    cy.get("#send2").click();
})

Cypress.Commands.add("findByTestId",(testId)=>{
    cy.get(`[data-testid=${testId}]`)
})