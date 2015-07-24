(function(angular){

'use strict';

module.exports =angular.module('myApp.view2', [require('ngRoute').name])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {

}]);

})(require('angular'));
