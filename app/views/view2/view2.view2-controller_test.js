(function(angular,ngMock){

	'use strict';
	var controllerModule = require('./view2.view2-controller.js'); 
	describe(controllerModule.name, function(){
 		beforeEach(ngMock.module(controllerModule.name));

	    it('should be defined', inject(function($controller) {
	      //spec body
	      var ctrl = $controller('View2Ctrl');
	      expect(ctrl).toBeDefined();
	    }));

	 });

})(
require('angular'),
require('ngMock')
);


