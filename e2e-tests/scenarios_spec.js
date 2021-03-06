'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */
var view1Page = require('./view1_page.js');
var view2Page = require('./view2_page.js');

describe('my app', function() {


  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });


  describe('view1', function() {

    beforeEach(function() {
      browser.get('index.html#/view1');
    });


    it('should render view1 when user navigates to /view1', function() {
      expect(view1Page.firstParagraph.getText()).
        toMatch(/Integration of Angular, Browserify and gulp/);
    });

  });


  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(view2Page.firstParagraph.getText()).
        toMatch(/partial for view 2/);
    });

  });
});
