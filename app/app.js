(function(angular){
'use strict';


// Declare app level module which depends on views, and components
module.exports =  angular.module('myApp', [
  require('ngRoute').name,
  require('./view1/view1.js').name,
  require('./view2/view2.js').name,
  require('./components/version/version.js').name
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);


})(require('angular'));

