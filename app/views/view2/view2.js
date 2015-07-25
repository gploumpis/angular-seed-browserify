(function(angular){

'use strict';

module.exports =angular.module('app.views.view2', [
	require('ui.router').name,
	require('./view2.view2-controller.js').name
])
.config(['$stateProvider',  function($stateProvider) {

      $stateProvider
        .state("app.view2", {
          url:'/view2',		
          controller:'View2Ctrl',
          template: require('./view2.html') 
        });

}]);

})(require('angular'));
