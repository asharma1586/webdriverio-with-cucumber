Feature: Performing a login


        As a employer on the workmarket login page
    I want to login

    Background:

        Given I am on the workmarket login page

    Scenario Outline: Performing login operation with passing test data as data table
        When I login with username and password <user> <password> into the text box
        Then I should see the message "Find Talent" on my home page

        Examples:
        |user| |password|
        |"qa+e@workmarket.com"| |"w0rkmarket12"|