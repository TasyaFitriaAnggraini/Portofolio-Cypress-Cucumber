import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const url = "https://www.sepulsa.com/"

Given('I am navigate to the homepage', () => {
    cy.visit(url)
})
When('I am click on the login button', () => {
    cy.get('#button_signin_home').click()
})
Then('I type a invalid email and password', () => {
    cy.get('#email').type('tasyafang@gmail.com')
    cy.get('#password').type('Testing23')
    cy.get('#submit_login').click()
})