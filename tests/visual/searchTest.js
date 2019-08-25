
const resizeUtil = require("../../utils/resizeUtil")
module.exports = {
  
  '@tags':['searchTest','smoke','all','vrt'],
  
  'Step 1: Visual Regression Test - Navigation to Google' : function (client) {
    client
      .url('https://www.google.com')
      .waitForElementVisible('body', 5000)
      .assert.title('Google')
      .assert.visible('input[type=text]')
      resizeUtil(client).resizeToCurrentPageDimentions()
      .assert.screenshotIdenticalToBaseline('body', 'homepage' ,{threshold: 0.05})
    },
 
  'Step 2: Visual Regression Test - Search for a key word' : function (client) {
      client
      .setValue('input[type=text]', 'Nightwatch')
      .waitForElementVisible('input[name=btnK]', 5000)
      .click('input[name=btnK]')
      .pause(1000)
      .assert.title('Nightwatch - Google Search')
      resizeUtil(client).resizeToCurrentPageDimentions()
      .assert.screenshotIdenticalToBaseline('body', 'searchresultspage' ,{threshold: 0.05})
      .end();
  }
};