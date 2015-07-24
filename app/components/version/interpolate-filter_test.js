(function(angular,ngMock){

'use strict';
	
	describe(require('./interpolate-filter.js').name, function() {
	  
	  beforeEach(ngMock.module(require('./version.js').name));

	  describe('interpolate filter', function() {
	    beforeEach(ngMock.module(function($provide) {
	      $provide.value('version', 'TEST_VER');
	    }));

	    it('should replace VERSION', inject(function(interpolateFilter) {
	      expect(interpolateFilter('before %VERSION% after')).toEqual('before TEST_VER after');
	    }));
	  });

	});


})(
require('angular'),
require('ngMock')
);
