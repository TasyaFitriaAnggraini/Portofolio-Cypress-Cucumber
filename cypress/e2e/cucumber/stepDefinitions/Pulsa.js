import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const url = "https://www.sepulsa.com/"

Given('I am navigate to the homepage Pulsa', () => {
    cy.visit(url)
})
When('I am click on the login buttonn', () => {
    cy.get('#button_signin_home').click()
})
Then('I am type a email and password', () => {
    cy.get('#email').type('tasyafangg@gmail.com')
    cy.get('#password').type('Testing123')
    cy.get('#submit_login').click()
})
When('I wait for {int} seconds', (seconds) => {
    cy.wait(seconds * 7000);
})
Then('I click on the icon pulsa', () => {
    cy.get('#Pulsa', { timeout: 5000 }).click()
})
Then('I am type a phone number', () => {
    cy.get('#phone_number', { timeout: 5000 }).type('0895636738568')
})
Then('I click on Tri2k', () => {
    cy.contains('.nominal-item__name', 'Tri Rp2.000', { timeout: 7000 }).click();
})
Then('I select the Gopay checkbox', () => {
    cy.get('input[name="Gopay"]', { timeout: 7000 }).check();
})
Then('I click payment now button', () => {
    cy.get('button[aria-label="Bayar tagihan"]', { timeout: 10000 }).click();
})
