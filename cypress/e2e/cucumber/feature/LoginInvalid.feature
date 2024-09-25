Feature: Sepulsa

    Scenario: Login InValid Credientials
        Given I am navigate to the homepage
        When I am click on the login button
        Then I type a invalid email and password