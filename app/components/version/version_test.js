(function(angular,ngMock){

'use strict';
var modVersion = require('./version.js');

describe(modVersion.name, function() {
  beforeEach(ngMock.module( modVersion.name));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('1.0.0');
    }));
  });
});



})(
require('angular'),
require('ngMock')
);






