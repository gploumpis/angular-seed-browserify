(function(angular){
'use strict';

module.exports = angular.module('myApp.view1', [ require('ngRoute').name])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

}]);

})(require('angular'));


