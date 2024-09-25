import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const url = "https://www.sepulsa.com/"

Given('I navigate to the homepage', () => {
    cy.visit(url)
})
When('I click on the login button', () => {
    cy.get('#button_signin_home').click()
})
Then('I type a email and password', () => {
    cy.get('#email').type('tasyafangg@gmail.com')
    cy.get('#password').type('Testing123')
    cy.get('#submit_login').click()
})