(function(angular){

	'use strict';

	module.exports =angular.module('app.views.views-controller', [])
	.controller('ViewsCtrl', ['$scope',function ViewsCtrl($scope) { /*controllers should move to a file and angular moduleof their own for testing purpoces*/
		var appPackage = require('../../package.json');
		$scope.project={
			name:appPackage.name,
			description:appPackage.description
		};
	}]);

})(require('angular'));
