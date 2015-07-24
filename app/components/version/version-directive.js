(function(angular){
'use strict';

module.exports = angular.module('app.version.version-directive', [])

.directive('appVersion', ['version', function(version) {
  return function(scope, elm, attrs) {
    elm.text(version);
  };
}]);

})(require('angular'));
