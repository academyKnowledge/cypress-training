/// <reference types="cypress" />
import { Given, Then, When , Before , After } from "cypress-cucumber-preprocessor/steps";

// Before  -> beforeEach
// After  => afterEach 
// before => beforeAll 
// after => afterall 

// Before({tags:"@TC-111"},()=>{
//     cy.log("Hello from scenario 1")
// })

// Before({tags:"@TC-111 or @TC-222"},()=>{
//     cy.log("Hello from scenario 1")
// })

Before({tags:"@TC-111 and @test1"},()=>{
    cy.log("Hello from scenario 1")
})

Given("The user navigate to magento website",()=>{
    cy.visit("/");
});

// .then((element)=>{

// })

const person = {
    name:"Razan",
    lastName:"Balatiah",
    isQA:true,
    isWatchingTv(){
        console.log("Yes")
    }
}

// const message = "Test";

// cy.wrap(person).find("").click().
// cy.wrap(message)

// cy.wrap(person).its("name").should("contain","Razan")
// cy.wrap(person).invoke('isWatchingTv').then(()=>{

// })

Then("The products in hot seller section are available",()=>{
    cy.get(".product-item-name a").then((products)=>{
        // cy.log(products.length)
        for (let i = 0; i < products.length; i++) {
            cy.wrap(products[i]).invoke('text').then((productName)=>{
                cy.log(productName)
        })
    }
})
})

When("Click on Gear menu and choose watches option",()=>{
    cy.contains("a","Gear").click()
    cy.get("ol.items").contains("a","Watches").click().wait(1500)
    cy.get("#mode-list").first().click();
})  

When("Add all watches with price > 50 to compare list",()=>{
    cy.get(".product-items").first().find("li .price").then((prices)=>{
        for (let i = 0; i < prices.length; i++) {
            cy.wrap(prices[i]).invoke('text').then((productPrice)=>{
                // $55.00 -> 55.00
                let price = productPrice.replace("$",''); // 55.00
                let finalPrice = parseInt(price); // 55 
                if(finalPrice > 50){
                    cy.wrap(prices[i]).parents(".price-box").next().find("a.tocompare")
                    .click({force:true})
                }
            })
        }
        
    })
});