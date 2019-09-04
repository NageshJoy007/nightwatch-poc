 module.exports ={
     
  "src_folders" : ["tests/sample"],
    "custom_commands_path" : "",
    "custom_assertions_path" : "",
    "page_objects_path" : "",
    "globals_path" : "",
  
    webdriver : {
      start_process: true
    },
  
    test_settings : {
        
      default : {
        screenshots : {
            enabled : true,
            on_failure : true,
            on_error : false,
            path : "screenshots"
          },
        globals : {
            myGlobalVar : "some value",
            otherGlobal : "some other value"
          },
          webdriver: {
            server_path: "node_modules/geckodriver/bin/geckodriver",
              port: 4444,
              cli_args: [
                "--log", "debug"
              ]
          },
          desiredCapabilities : {
            browserName : "firefox",
            acceptInsecureCerts : true
          },
          filter: ["tests/sample"]
        },


      chrome : {
        webdriver: {
          port: 9515,
          server_path: "node_modules/chromedriver/bin/chromedriver",
          cli_args: ["--verbose"]
        },
        desiredCapabilities : {
          browserName : "chrome",
          loggingPrefs: {"driver": "INFO", "server": "OFF", "browser": "INFO"}
        }
      },

      chromehl : {
        webdriver: {
          port: 9515,
          server_path: "node_modules/chromedriver/bin/chromedriver",
          cli_args: ["--verbose","--headless","--no-sandbox"]
        },
        desiredCapabilities : {
          browserName : "chrome",
          loggingPrefs: {"driver": "INFO", "server": "OFF", "browser": "INFO"}
        }
      },


      safari: {
        desiredCapabilities : {
          browserName : 'safari',
          alwaysMatch: {
            acceptInsecureCerts: true
          }
        },
        webdriver: {
          port: 4445,
          server_path: '/usr/bin/safaridriver'
        }
      },

      firefox: {
        webdriver: {
          server_path: "node_modules/geckodriver/bin/geckodriver",
            port: 4444,
            cli_args: [
              "--log", "debug"
            ]
        },
        desiredCapabilities : {
          browserName : "firefox",
          acceptInsecureCerts : true
        },
        
      },

      firefoxhl: {
        webdriver: {
          start_process: true,
          server_path: "node_modules/geckodriver/bin/geckodriver",
          cli_args: ["--log", "debug"]
        },
        desiredCapabilities : {
          browserName : "firefox",
          acceptInsecureCerts : true,
          alwaysMatch: {
            "moz:firefoxOptions": { args: [ "-headless", "-safe-mode" ] }
          }

        }
      }



      

    }

 } 