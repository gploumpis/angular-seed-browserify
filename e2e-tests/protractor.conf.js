exports.config = {
  allScriptsTimeout: 11000,
  chromeDriver: '../node_modules/protractor/selenium/chromedriver',
  directConnect: true,
  
  specs: [
    '*_spec.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8000/dist/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
