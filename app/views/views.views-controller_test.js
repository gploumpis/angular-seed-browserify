(function(angular,ngMock){

	'use strict';
	var controllerModule = require('./views.views-controller.js'); 
	describe(controllerModule.name, function(){
 		beforeEach(ngMock.module(controllerModule.name));

		var $controller;


		  beforeEach(inject(function(_$controller_){
		    // The injector unwraps the underscores (_) from around the parameter names when matching
		    $controller = _$controller_;
		  }));

	    it('should be defined', function() {
	      var ctrl = $controller('ViewsCtrl', { $scope: {} });
	      expect(ctrl).toBeDefined();
	    });

		it('should expose project name and description', function() {
	      var $scope = {}, 
	      ctrl = $controller('ViewsCtrl', { $scope: $scope });
	      
	      expect($scope.project).toBeDefined();
	      expect($scope.project.name).toBeDefined();
	      expect($scope.project.description).toBeDefined();
	    });



	 });

})(
require('angular'),
require('ngMock')
);


