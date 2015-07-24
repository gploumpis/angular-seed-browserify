(function(angular){

'use strict';

module.exports = angular.module('app.version.interpolate-filter', [])
.filter('interpolate', ['version', function(version) {
	  return function(text) {
	    return String(text).replace(/\%VERSION\%/mg, version);
	  };
	}]);

})(require('angular'));
