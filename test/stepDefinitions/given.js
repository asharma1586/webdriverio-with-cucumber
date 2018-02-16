
import { defineSupportCode } from 'cucumber';
import loginPage from '../pageobjects/WM-Employerlogin.page';
import talentpoolPage from '../pageobjects/WM-EmployerTalentPool.page';
import assignment from '../pageobjects/WM-AssignmentCreation.page';

defineSupportCode(function({ Given }) 
{

  // // *** belongs to Yahoo serch feature
  // Given(/^I am on the search page$/, function(){
  //   yahooPage.open();
  //   browser.getTitle().should.equal('Yahoo Search - Web Search');
  // });

  // *** belongs to WM-Employerlogin feature
  Given(/^I am on the workmarket login page$/, function() 
  {
    loginPage.open();     // navigating to login page
  });

  //*** belongs to WM-EmployerTalentPool feature
  Given(/^I am on home page$/, function()
  {
  	talentpoolPage.open();
});

//*** belongs to WM-AssignmentCreation feature
  Given(/^I am on home page to create assignment$/, function()
  {
    assignment.open();
  });


});