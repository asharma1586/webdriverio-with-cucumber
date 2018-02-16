import Page from './page'

class home extends Page {

    /**
    * define elements
    */

    //get accountMessage () { return browser.element('//div/li[contains(., "My Company Scorecard")]'); }
    get accountMessage () { return browser.element('=Find Talent'); }

    /**
     * define or overwrite page methods
     */

    open () {
        super.open('https://qa.workmarket.com/home')       //this will append `contact-us` to the baseUrl to form complete URL
        browser.pause(2000);
    }

    waitForAccountPageToLoad () {
      if(!this.accountMessage.isVisible()){
        this.accountMessage.waitForVisible(10000);
      }
    }

    getUserInfo (){
      return this.accountMessage.getText();
    }
}
export default new home()