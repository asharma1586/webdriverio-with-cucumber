
import { defineSupportCode } from 'cucumber';
import loginPage from '../pageobjects/WM-Employerlogin.page';
import talentpoolPage from '../pageobjects/WM-EmployerTalentPool.page';
import assignment from '../pageobjects/WM-AssignmentCreation.page';

defineSupportCode(function({ When }) {
  // *** belongs to Yahoo serch feature
  // When(/^I enter "([^"]*)" into the search box$/, function(arg1) {
  //   yahooPage.enterText(arg1);
  //   yahooPage.searchInput.getValue().should.equal(arg1);
  // });

  // When(/^I click the search button$/, function() {
  //   yahooPage.search();
  // });

  //*** belongs to ta-loging  feature
  When(/^I login with username and password "([^"]*)" "([^"]*)" into the text box$/, function(arg1, arg2) 
  {
    loginPage.login(arg1, arg2);    // entering user name, password and and submiting the page
  });


  //*** belongs to WM-EmployerTalentPool feature
  When(/^employer click on Talent pool link under talent$/, function(){
    talentpoolPage.createpool();
    //talentpoolPage.talentpoolform();
  });

  When(/^click on Create talent pool button$/, function(){
    talentpoolPage.talentpoolform();
  });

  When(/^employer click on New Assignments link under work and fill all the required text fields$/, function(){
      assignment.createAssignment();
      assignment.assignmentDetails();
  });

});
