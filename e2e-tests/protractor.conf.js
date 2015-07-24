exports.config = {
  allScriptsTimeout: 11000,
  chromeDriver: '../node_modules/protractor/selenium/chromedriver',
  directConnect: true,
  
  specs: [
    '*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8000/app/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
