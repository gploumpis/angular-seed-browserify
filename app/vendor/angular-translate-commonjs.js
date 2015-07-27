/*cannot specify these kind of dependencies by shimming*/
var angular = require('angular');
require("./../bower_components/angular-translate/angular-translate.js")
require('./../bower_components/angular-translate-storage-cookie/angular-translate-storage-cookie.js');	
require('./../bower_components/angular-translate-storage-local/angular-translate-storage-local.js');	
require('./../bower_components/angular-translate-loader-partial/angular-translate-loader-partial.js');	

module.exports =  angular.module('pascalprecht.translate');