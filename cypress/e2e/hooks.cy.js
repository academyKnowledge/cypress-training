/// <reference types="cypress" />
describe('Mocha hooks', () => {
   
    before(()=>{
        cy.log("hi from before")
    })

    beforeEach(()=>{
        cy.log("hi from beforeEach")
    })

    after(()=>{
        cy.log("hi from after")
    })

    afterEach(()=>{
        cy.log("hi from afterEach")
    })

    it("test case1",()=>{

    })

    it('test case2', () => {
        
    });
});