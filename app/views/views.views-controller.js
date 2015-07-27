(function(angular){

	'use strict';

	module.exports =angular.module('app.views.views-controller', [
		require('pascalprecht.translate').name
	])
	.controller('ViewsCtrl', ['$scope','$translate','$translatePartialLoader',function ViewsCtrl($scope,$translate,$translatePartialLoader) { 
		var appPackage = require('../../package.json');
		
		$translatePartialLoader.addPart('views');

		$scope.project={
			name:appPackage.name,
			description:appPackage.description,
			
		};

		$scope.changeLang=changeLang;
		

		function changeLang(lang){
			$translate.use(lang);
		}
	}]);

})(require('angular'));
