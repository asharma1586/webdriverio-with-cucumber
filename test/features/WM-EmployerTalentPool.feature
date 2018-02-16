Feature: Employer can create a public talent pool

 Background:

        Given I am on the workmarket login page

Scenario Outline: Performing login operation with passing test data as data table
        When I login with username and password <user> <password> into the text box
        Then I should see the message "Find Talent" on my home page

        Examples:
        |user| |password|
        |"qa+e@workmarket.com"| |"w0rkmarket12"|


 	Scenario: Employer can create a public talent pool
 		Given I am on home page
 			When employer click on Talent pool link under talent 
 			When click on Create talent pool button 
 			And click on create talent pool button after filling the required text fields
 			Then public talent pool created