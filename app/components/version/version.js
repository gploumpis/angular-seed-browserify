(function(angular){
'use strict';

module.exports = angular.module('myApp.version', [
 require('./interpolate-filter.js').name,
  require('./version-directive.js').name
])

.value('version', require('../../../package.json').version);

})(require('angular'))
