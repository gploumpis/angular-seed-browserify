(function(angular,ngMock){

'use strict';
var modView1 = require('./view1.js');

describe(modView1.name, function() {

  beforeEach(ngMock.module(modView1.name));

  describe('view1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('View1Ctrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});



})(
require('angular'),
require('ngMock')
);








