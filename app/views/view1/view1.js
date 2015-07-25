(function(angular){
'use strict';

module.exports = angular.module('app.views.view1', [ 
	require('ui.router').name,
	require('./view1.view1-controller.js').name
])
.config(['$stateProvider',  function($stateProvider) {

      $stateProvider
        .state("app.view1", {
          url:'/view1',
          controller:'View1Ctrl',
          template: require('./view1.html') 
        });

}]);

})(require('angular'));


