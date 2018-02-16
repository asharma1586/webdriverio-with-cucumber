
export default class Page {
	
  open (path) {
    browser.url(path)
  }

  checkLogin (val) {
  	if (val) {
  		isLogin = true;
  	}else{
  		isLogin = false;
  	}
  	return isLogin;
  }
}
