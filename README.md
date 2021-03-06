# Nightwatch-Vrt-BrowserStack


### Waht is Nightwatch ?

[Nightwatch](https://nightwatchjs.org/) is an automated testing framework for web applications and websites, written in Node.js and using the W3C WebDriver API (formerly Selenium WebDriver. It is a complete browser (End-to-End) testing solution which aims to simplify the process of setting up Continuous Integration and writing automated tests.

<img src ="http://nightwatchjs.org/img/logo-nightwatch.png" height = "110">

### Waht is Nightwatch-Vrt ?

[Nightwatch VRT](https://www.npmjs.com/package/nightwatch-vrt/) extends nightwatch.js with an assertion that captures a screenshot of a DOM element identified by a selector and compares the screenshot against a baseline screenshot. If the baseline screenshot does not exist, it will be created the first time you run the test and the assertion will pass.

### What is BrowserStack ?

[BrowserStack](https://www.browserstack.com/) is a cloud web and mobile testing platform that enables developers to test their websites and mobile applications across on-demand browsers, operating systems and real mobile devices, without requiring users to install or maintain an internal lab of virtual machines, devices or emulators.

![BrowserStack Logo](https://d98b8t1nnulk5.cloudfront.net/production/images/layout/logo-header.png?1469004780)


This is a sample nightwatch project to run your functional, visual regression tests programmatically on your local and also on cloud platform using BrowserStack.

### Setup 

* Install node via `brew install node` Or download [Node.js](https://nodejs.org/en/download/)

* Do  `git clone https://github.com/NageshJoy007/nightwatch-poc.git`

* To download required node_modules specified in [package.json](./package.json)  `npm install`

### Run

Go into project folder and run below commands:

1) To run tests using scripts in package.json

   `npm test`

2) To run your tests by default : on firefox

   `nightwatch ./tests/sample`

3) To run your tests using specific browser

   `nightwatch -e firefox`   

4) To run your tests & generate html reports

   `nightwatch -e chrome --reporter html-reporter.js`

5) To run your tests on two different browsers parallelly

   `nightwatch -e chrome,firefox --reporter html-reporter.js`

6) To run your tests using specific tag

   `nightwatch -e chrome --tag smoke --reporter html-reporter.js`

7) You can pass different nightwatch configurations/test settings to your tests run time from cli

   `nightwatch -c ./conf/local.conf.js -e chrome --reporter html-reporter.js`

8) To run your tests using BrowserStack - Nightwatch Integration with BrowserStack

    * Get your browserstack account license for automation

    * Export the environment variables for the Username and Access Key of your BrowserStack account
            
        ```
        export BROWSERSTACK_USERNAME=<browserstack-username> &&
        export BROWSERSTACK_ACCESS_KEY=<browserstack-access-key>
        ```
        
    * Or Update `*.conf.js` files inside the `conf/` directory with your `browserstack-username` and `browserstack-access-key`.


   `nightwatch -c ./conf/browserstack.conf.js -e chrome --reporter html-reporter.js`  Or   `npm run test-bs`

    * You can also run your tests for local/internal applications using BrowserStack

   `node scripts/local.runner.js -c conf/browserstack.local.conf.js -e chrome`   Or   `npm run test-bs-local`
    
    * To test on different sets of os, browsers check out our [platform configurator](https://www.browserstack.com/automate/nightwatch#run-tests-on-desktop-mobile)

9) You can run visual regression tests of your application as below

   `nightwatch -e chrome -c ./conf/vrt.conf.js --reporter html-reporter.js`


   `nightwatch -e chrome -c ./conf/vrt.bs.conf.js --reporter html-reporter.js`


   

### Output

    * Reports will generate under tests_output folder.


    * You can view your BStack test results on the BrowserStack [Dashboard](https://www.browserstack.com/automate)

![Report sample against google.com](nightwatch-report.png)

