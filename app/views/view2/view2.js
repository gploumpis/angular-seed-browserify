(function(angular){

'use strict';

module.exports =angular.module('app.view2', [
	require('ui.router').name
])
.config(['$stateProvider',  function($stateProvider) {

      $stateProvider
        .state("app.view2", {
          url:'/view2',		
          controller: 'View2Ctrl',		
          template: require('./view2.html') 
        });

}])
.controller('View2Ctrl', [function() {

}]);

})(require('angular'));
