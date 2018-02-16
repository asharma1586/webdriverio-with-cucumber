import Page from './page'

class assignment extends Page{

/**
    * define elements
    */

get newAssignment () {return browser.element('=New Assignment');}
get assignmentTitle () {return browser.element('#basics-title');}
get assignmentDesc () {return browser.element('//*[@class="ql-editor ql-blank"]');}
get location () {return browser.element('//input[@value="virtual"]');}
get saveAsDarft () {return browser.element('//button[contains(text(),"Save as Draft")]');}
get flatFee () {return browser.element('#payments-flatPrice');}


/**
     * define or overwrite page methods
     */

    open () {
        if (super.checkLogin){
            if(browser.getUrl().indexOf('home') === -1){
                createAssignment();
            }
        }else{
            super.open('https://qa.workmarket.com/login')       //this will append `login` to the baseUrl to form complete URL
            browser.pause(2000);
        }
       
    }

    
createAssignment() {
		this.newAssignment.click();
	}

    assignmentDetails(){
        browser.pause(5000);
        this.assignmentTitle.setValue('Title1');
        browser.pause(2000);
        this.assignmentDesc.setValue('Test description');
        browser.pause(2000);
        this.location.click();
        this.flatFee.setValue('0.01');
        this.saveAsDarft.click();
        browser.pause(1000);
    }
}

export default new assignment()