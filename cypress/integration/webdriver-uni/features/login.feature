@regression
Feature: WebdriverUniversity login page

    Scenario: Login using valid credentials

        Given I access the WebdriverUniversity Login Portal page
        When I enter a username webdriver
        And I enter a password webdriver123
        And I click on the Login button
        Then I should be presented with the following message validation succeeded


    Scenario: Login using invalid credentials

        Given I access the WebdriverUniversity Login Portal page
        When I enter a username webdriver
        And I enter a password webdriver
        And I click on the Login button
        Then I should be presented with the following message validation failed

    # above 2 sceanrios are covered from following using data paramaeterization
    @login
    Scenario Outline: Test login via webdriverUniversity login portal
        Given I access the WebdriverUniversity Login Portal page
        When I enter a username <username>
        And I enter a password <password>
        And I click on the Login button
        Then I should be presented with the following message <message>

        Examples:
            | username  | password     | message              |
            | webdriver | webdriver123 | validation succeeded |
            | webdriver | webdriver    | validation failed    |