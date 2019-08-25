const path = require('path');
nightwatch_config = {
     
    "src_folders" : ["tests/visual"],
    "custom_commands_path" : ["node_modules/nightwatch-vrt/commands"],
    "custom_assertions_path" : ["node_modules/nightwatch-vrt/assertions"],
    "page_objects_path" : "",
    "globals_path" : "",
  
    selenium : {
        "start_process" : false,
        "host" : "hub-cloud.browserstack.com",
        "port" : 80
      },
    
    common_capabilities: {
        'browserstack.user': process.env.BROWSERSTACK_USERNAME  || 'BROWSERSTACK_USERNAME',
        'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',
        'name': 'functional tests'
      },
  
    "test_settings" : {
        
      "default" : {
        "silent": true,
        "visual_regression_settings": {
            //"latest_screenshots_path": '',
            "latest_suffix": '.latest',
            //"baseline_screenshots_path": '',
            "baseline_suffix": '.baseline',
            //"diff_screenshots_path": ''
            "diff_suffix": '.diff',
            "threshold": 0.05,
            "prompt": true,
            "always_save_diff_screenshot": false
        },
        
      },
      chrome: {
        desiredCapabilities: {
          os: 'Windows',
          os_version: '10',
          browser: 'Chrome',
          browser_version: '72.0',
          resolution: '1024x768'
        }
      },
      firefox: {
        desiredCapabilities: {
          os: 'OS X',
          os_version: 'High Sierra',
          browser: "firefox",
          browser_version: '68.0',
          resolution: '1024x768'
        }
      }

    }

 };

 // Code to support common capabilites
for(var i in nightwatch_config.test_settings){
    var config = nightwatch_config.test_settings[i];
    config['selenium_host'] = nightwatch_config.selenium.host;
    config['selenium_port'] = nightwatch_config.selenium.port;
    config['desiredCapabilities'] = config['desiredCapabilities'] || {};
    for(var j in nightwatch_config.common_capabilities){
      config['desiredCapabilities'][j] = config['desiredCapabilities'][j] || nightwatch_config.common_capabilities[j];
    }
  }

 module.exports = nightwatch_config;