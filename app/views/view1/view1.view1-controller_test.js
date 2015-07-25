(function(angular,ngMock){

	'use strict';

	var controllerModule = require('./view1.view1-controller.js'); 


  describe(controllerModule.name, function(){
  
  	beforeEach(ngMock.module(controllerModule.name));

    it('should be defined', inject(function($controller) {
      //spec body
      var ctrl = $controller('View1Ctrl');
      expect(ctrl).toBeDefined();
    }));

  });



})(
require('angular'),
require('ngMock')
);