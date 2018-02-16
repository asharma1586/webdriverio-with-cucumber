import Page from './page'

class loginPage extends Page {

    /**
    * define elements
    */

    // get usernameInput()   { return browser.element('//*[@name="username"]'); }
    // get passwordInput()   { return browser.element('//*[@name="password"]'); }
    // get rememberMe ()     { return browser.element('//span[contains(., "Remember Me")]'); }
    // get loginButton()     { return browser.element('//button[contains(., "Login")]'); }
    // get footerImage()     { return browser.element('//*[@class="foot-brand center-block img-responsive"]'); }

    get usernameInput() { return browser.element('#login-email');}
    get passwordInput() { return browser.element('#login-password');}
    get loginButton()   { return browser.element('#login_page_button');}

    /**
     * define or overwrite page methods
     */
    open () {
        super.open('https://qa.workmarket.com/login')       //this will append `login` to the baseUrl to form complete URL
        browser.windowHandleFullscreen();
        browser.pause(1000);
    }
    /**
     * your page specific methods
     */

    // waitForloginPageToLoad () {
    //   if(!this.footerImage.isVisible()){
    //     this.footerImage.waitForVisible(5000);
    //   }
    // }

    // login (username, password) {
    //   this.waitForloginPageToLoad();
    //   this.usernameInput.setValue(username);
    //   this.passwordInput.setValue(password);
    //   this.rememberMe.click();
    //   this.loginButton.click();
    //   browser.pause(2000);
    // }

     login () {
    //  this.waitForloginPageToLoad();
      this.usernameInput.setValue('qa+e@workmarket.com');
      this.passwordInput.setValue('w0rkmarket12');
      this.loginButton.click();
      browser.pause(2000);
      super.checkLogin(true);
    }
}

export default new loginPage()
