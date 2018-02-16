
import { defineSupportCode } from 'cucumber';
import home from '../pageobjects/WM-home.page';
import talentpoolPage from '../pageobjects/WM-EmployerTalentPool.page';
import assignmentDetail from '../pageobjects/WM-AssignmentDetail.page';

defineSupportCode(function({ Then }) {
  // *** belongs to Yahoo serch feature
  // Then(/^I should see a list of search results$/, function() {
  //   yahooPage.isSearched().should.be.true;
  // });

  // *** belongs to WM-loging  feature
  Then(/^I should see the message "([^"]*)" on my home page$/, function(message) {
    home.getUserInfo().should.equal(message);
   });

  Then(/^I should see the message "([^"]*)" on detail page$/, function(message){
  	assignmentDetail.assignmentStatus().should.equal(message)

  });

});
