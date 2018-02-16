import page from './page'

class talentpoolPage extends page{

/**
    * define elements
    */

   get talentpoollink() {return browser.element('=Talent Pools'); }
   get createtalentpool() {return browser.element('//span[contains(text(),"Create Talent Pool")]');}
   get talentpoolname(){return browser.element('//input[@name="name"]');}
   get industry(){return browser.element('//form//div[1]//div[1]//div[1]//div[1]//div[3]//svg');}
   get description(){return browser.element('//textarea[@name="description"]');}
   get createbuttononpopup(){return browser.element('//span[contains(text(),"Create Talent Pool")]');}

/**
     * define or overwrite page methods
     */
    open () {
        super.open('https://qa.workmarket.com/login')       //this will append `login` to the baseUrl to form complete URL
        browser.pause(1000);
    }

/**
     * to wait for the talent pool page to load
     */
    waitforTalentpoolPageToLoad () 
    {
      if (!this.createtalentpool.isVisible()) {
        this.createtalentpool.waitForVisible(10000);
      }
    }


    createpool(){
    	this.talentpoollink.click();
    }

/**
     * define the talent pool 
     */
    talentpoolform(){
      this.waitforTalentpoolPageToLoad();
    	this.createtalentpool.click();
    	browser.pause(2000);
    	this.talentpoolname.setValue('test1_pool');
    	this.industry.click();
    	this.description.setValue('this is a test description');
    	this.createbuttononpopup.click();
    }
}
export default new talentpoolPage();