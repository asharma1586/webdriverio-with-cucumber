Feature: Employer can create an assignment

 Background:

        Given I am on the workmarket login page

Scenario Outline: Performing login operation with passing test data as data table
        When I login with username and password <user> <password> into the text box
        Then I should see the message "Find Talent" on my home page

        Examples:
        |user| |password|
        |"qa+e@workmarket.com"| |"w0rkmarket12"|


 	Scenario: Employer can create an assignment
 		Given I am on home page to create assignment
 		When employer click on New Assignments link under work and fill all the required text fields
 		Then I should see the message "DRAFT" on detail page