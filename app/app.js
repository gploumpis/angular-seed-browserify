(function(angular){
'use strict';

require('modernizr');
require('./app.css');

// Declare app level module which depends on views, and components
module.exports =  angular.module('app', [
  require('ui.router').name,
  require('./views/view1/view1.js').name,
  require('./views/view2/view2.js').name,
  require('./components/version/version.js').name
])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider,   $urlRouterProvider) {

 	  $urlRouterProvider.otherwise('/view1');

      $stateProvider
        .state("app", {
		   // With abstract set to true, that means this state can not be explicitly activated.
          // It can only be implicitly activated by activating one of its children.
          abstract: true,

          // By default, templateswill populate the ui-view within the parent state's template.
          // For top level states, like this one, the parent template is
          // the index.html file. So this template will be inserted into the
          // ui-view within index.html.
          template: require('./views/views.html') 
        });

}])
.run(['$rootScope', '$state', '$stateParams',function ($rootScope,   $state,   $stateParams) {

    // It's very handy to add references to $state and $stateParams to the $rootScope
    // so that you can access them from any scope within your applications.For example,
    // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
    // to active whenever 'contacts.list' or one of its decendents is active.
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}]);


})(require('angular'));

