/*
	///////////////////////  EXAMPLE   ///////////////////////////////		

	var LoginPage = function () {
	    this.userInput = element(by.model('login.loginData.username'));
	    this.passwordInput = element(by.model('login.loginData.password'));
	    this.loginButton = element(by.tagName('button'));

	    this.get = function () {
	        return browser.get('#/login');
	    };

	    this.login = function (username, password) {
	        var self = this;
	        browser.getLocationAbsUrl().then(function (path) {
	            if (path !== '/login') {
	                return self.get();
	            }
	           
	        });


	        this.userInput.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a"), username);
	        this.passwordInput.sendKeys(password);
	        this.loginButton.click();
	        return browser.waitForAngular();
	    };
	};


	module.exports = new LoginPage();

*/

function View2Page() {
    /*
		Use pages to abstract element access wrap page specific functionality in functions
	*/
    
    this.firstParagraph = element.all(by.css('[ui-view] p')).first();
    
};


module.exports = new View2Page();