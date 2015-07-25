(function(angular){
'use strict';

// require applevel scripts with no dependencies
require('modernizr');
require('bootstrap');

// require app level css, css dependencies are declared within the css 
require('./app.css');


// Declare app level module which depends on views, and components
module.exports =  angular.module('app', [
  require('ui.router').name, /*require external dependencies such as angular modules by their name instead of by file forincreased readability*/
  require('./views/views.js').name /*require internal dependencies by filename*/  
])
.config(['$urlRouterProvider', function($urlRouterProvider) {
 	  $urlRouterProvider.otherwise('/view1');
}])
.run(['$rootScope', '$state', '$stateParams',function ($rootScope,   $state,   $stateParams) {

    // It's very handy to add references to $state and $stateParams to the $rootScope
    // so that you can access them from any scope within your applications.For example,
    // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
    // to active whenever 'contacts.list' or one of its decendents is active.
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}]);


})(require('angular')/*require angular by name*/);

