import Page from './Page'

class assignmentDetail extends Page {

/**
    * define elements
    */

    get assignmentStatusValue () {return browser.element('.assignment-status');}

   
   /**
     * define or overwrite page methods
     */
    open () {
        super.open('https://qa.workmarket.com/login')       //this will append `login` to the baseUrl to form complete URL
        browser.pause(1000);
    }

   assignmentStatus () {
    browser.pause(2000);
   	return this.assignmentStatusValue.getText();

   }

}
export default new assignmentDetail()