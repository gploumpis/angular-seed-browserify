(function(angular){
'use strict';

module.exports = angular.module('app.views', [ 
	require('ui.router').name,
	require('./views.views-controller.js').name,
	require('./view1/view1.js').name,
  	require('./view2/view2.js').name,
  	require('../components/version/version.js').name
])
.config(['$stateProvider',  function($stateProvider) {

  $stateProvider
    .state("app", {
      abstract: true,
      controller:'ViewsCtrl',
      template: require('./views.html')/* inline partials within module */ 
    });

}]);



})(require('angular'));


