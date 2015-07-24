(function(angular){
'use strict';

module.exports = angular.module('app.view1', [ 
	require('ui.router').name
])
.config(['$stateProvider',  function($stateProvider) {

      $stateProvider
        .state("app.view1", {
          url:'/view1',
          controller: 'View1Ctrl',		
          template: require('./view1.html') 
        });

}])
.controller('View1Ctrl', [function() {

}]);

})(require('angular'));


