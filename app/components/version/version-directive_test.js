(function(angular,ngMock){

'use strict';
var modVersion = require('./version.js');
describe( modVersion.name, function() {
  beforeEach(ngMock.module(modVersion.name));

  describe('app-version directive', function() {
    it('should print current version', function() {
      ngMock.module(function($provide) {
        $provide.value('version', 'TEST_VER');
      });
      inject(function($compile, $rootScope) {
        var element = $compile('<span app-version></span>')($rootScope);
        expect(element.text()).toEqual('TEST_VER');
      });
    });
  });
});


})(
require('angular'),
require('ngMock')
);




