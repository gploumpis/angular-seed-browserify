# angular-seed-browserify


This project is a fork of [angular-seed](https://github.com/angular/angular-seed) web app.
You can use it to quickly bootstrap your  [AngularJS](http://angularjs.org/) webapp projects 
and dev environment for these projects.

The seed contains a sample AngularJS application and is preconfigured to install the Angular
framework and a bunch of development and testing tools for instant web development gratification.

The seed app demonstrates a prety nice integration of Angular and [Browserify](http://browserify.org)
and serves as a template for self contained consumable modules.
### Features

* Structure that makes the directory and app structure consistent with the architectural design of the app and helps tooling.
* Developers always work and test code on a minified and packaged version of the app (source maps included), same as a production environment
* Developers can have their test suits always running so as to immediatelly identify breaking changes
* Code coverage
* Addition of new test cases with no configuration
* Script dependencies are easy to track 
* Module composition
* Promotes DRY principle and the Module pattern
* Showcases protractor page objects

## Getting Started

To get you started you can simply clone the angular-seed repository and install the dependencies:

### Prerequisites

You need git to clone the angular-seed repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize and test angular-seed. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone angular-seed

Clone the angular-seed repository using [git](http://git-scm.com/):

```
git clone https://github.com/gploumpis/angular-seed-browserify.git
cd angular-seed-browserify
```

If you just want to start a new project without the angular-seed-browserify commit history then you can do:

```bash
git clone --depth=1 https://github.com/gploumpis/angular-seed-browserify.git <your-project-name>
```

The `depth=1` tells git to only pull down one commit worth of historical data.

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].
* We run tasks via 'gulp, a [streaming package manager](http://gulpjs.com/)

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files



*Note that the `bower_components` folder would normally be installed in the root folder but
angular-seed changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*


Although `gulp` is listed as a dependency and will be installed in your project you should make it globally available
by running 

```
npm install -g gulp
```




`Tip:` if you are a windows user, then you also need to install python 2.7.6 
and set PYTHON environment variable (some node dependencies are rebuild on installation). 
Also it will be wise to run your shell as administrator
### Build the Application

Before you run you application it needs to be build. You build the app by  

```
gulp
```

Whenever a file that belongs to the app file dependency tree changes your task runner will produce a fresh build.


### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/dist/index.html`.


## Testing

There are two kinds of tests in the angular-seed application: Unit tests and End to End tests.

### Running Unit Tests

The angular-seed-browserify app comes preconfigured with unit tests. These are written in
[Jasmine][jasmine], which we run with the [Karma Test Runner][karma]. We provide a Karma
configuration file to run them.

* the configuration is found at `karma.conf.js`
* the unit tests are found next to the code they are testing and are named as `..._test.js`.

The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
```

This script will start the Karma test runner to execute the unit tests. Moreover, Karma will sit and
watch the source and test files for changes and then re-run the tests whenever any of them change.
This is the recommended strategy; if your unit tests are being run every time you save a file then
you receive instant feedback on any changes that break the expected code functionality.

You can also ask Karma to do a single run of the tests and then exit.  This is useful if you want to
check that a particular version of the code is operating as expected.  The project contains a
predefined script to do this:

```
npm run test-single-run
```

Behind the scenes this will also call our code coverage tool [istanbul](https://gotwarlost.github.io/istanbul/). 
You should find that you have a new folder in your project.

reporters/coverage - contains coverage reports for configured browsers 


### End to end testing

The angular-seed app comes with end-to-end tests, again written in [Jasmine][jasmine]. These tests
are run with the [Protractor][protractor] End-to-End test runner.  It uses native events and has
special features for Angular applications.

* the configuration is found at `e2e-tests/protractor-conf.js`
* the end-to-end tests are found in `e2e-tests/scenarios.js`

Protractor simulates interaction with our web app and verifies that the application responds
correctly. Therefore, our web server needs to be serving up the application, so that Protractor
can interact with it.

```
npm start
```

In addition, since Protractor is built upon WebDriver we need to install this.  The angular-seed
project comes with a predefined script to do this:

```
npm run update-webdriver
```

This will download and install the latest version of the stand-alone WebDriver tool.

Once you have ensured that the development web server hosting our application is up and running
and WebDriver is updated, you can run the end-to-end tests using the supplied npm script:

```
npm run protractor
```

This script will execute the end-to-end tests against the application being hosted on the
development server.


## Updating Dependencies

You can update the tool dependencies by running:

```
npm update
```

This will find the latest versions that match the version ranges specified in the `package.json` file.

You can update the client side dependencies by running:

```
bower update
```

This will find the latest versions that match the version ranges specified in the `bower.json` file.

### Running the App

The angular-seed project comes preconfigured with a local development webserver.  It is a node.js
tool called [http-server][http-server].  You can start this webserver with `npm start` but you may choose to
install the tool globally:

```
sudo npm install -g http-server
```

Then you can start your own development web server to serve static files from a folder by
running:

```
http-server -a localhost -p 8000
```

Alternatively, you can choose to configure your own webserver, such as apache or nginx. Just
configure your server to serve the files under the `dist/` directory.


### TODO

* Integrate with travis for CI
* Showcase i18n
* Incorporate live reload of SPA on build
* Showcase routing and state composition 