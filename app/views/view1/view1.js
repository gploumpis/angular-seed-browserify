(function(angular){
'use strict';

module.exports = angular.module('app.views.view1', [ 
	require('ui.router').name
])
.config(['$stateProvider',  function($stateProvider) {

      $stateProvider
        .state("app.view1", {
          url:'/view1',
          template: require('./view1.html') 
        });

}]);

})(require('angular'));


