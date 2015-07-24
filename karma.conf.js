var istanbul = require('browserify-istanbul');

module.exports = function(config){
  config.set({

    basePath : '',
    // frameworks to use
    frameworks: ['browserify','jasmine'],
    // list of files / patterns to load in the browser
    files: [
      //{pattern:'app/bower_components/angular/angular.js', watched: false },
      //{pattern:'app/bower_components/angular-mocks/angular-mocks.js', watched: false },
      //{pattern:'app/bower_components/angular-route/angular-route.js', watched: false },
      'app/**/*_test.js'
    ],


    // list of files to exclude
    exclude: [
      'app/bower_components/**/*_test.js'
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress', 'coverage'],
    
    
    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,
    
    
    browsers : ['Chrome'],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,
    
    preprocessors: {
        '**/*_test.js': ['browserify']
    },
    coverageReporter : {
        type : 'html',
        dir : 'reporters/coverage/'
    },
    junitReporter : {
      outputFile: 'reporters/unit/unit.xml',
      suite: 'unit'
    },
    plugins : [
      'karma-browserify',
      'karma-coverage',
      'karma-jasmine',
      'karma-chrome-launcher'
    ],

    browserify: {
      debug: true
      ,transform: [ istanbul({
          ignore: ['**/node_modules/**', '**/*_test.js'],
    })]
      //,extensions: ['.js','.html']
    }
    

  });
};
