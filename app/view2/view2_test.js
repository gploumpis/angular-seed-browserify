(function(angular,ngMock){

'use strict';
	

	'use strict';
	var modView2=require('./view2.js'); 
	describe(modView2.name, function() {

	  beforeEach(ngMock.module(modView2.name));

	  describe('view2 controller', function(){

	    it('should ....', inject(function($controller) {
	      //spec body
	      var view2Ctrl = $controller('View2Ctrl');
	      expect(view2Ctrl).toBeDefined();
	    }));

	  });
	});

})(
require('angular'),
require('ngMock')
);


