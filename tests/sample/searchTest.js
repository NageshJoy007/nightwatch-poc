module.exports = {
  
  '@tags':['searchTest','smoke','all'],
  
  'Step 1: Navigation to Google' : function (client) {
    client
      .url('https://www.google.com')
      .waitForElementVisible('body', 5000)
      .assert.title('Google')
      .assert.visible('input[type=text]') 
    },
 
  'Step 2: Search for a key word' : function (client) {
      client
      .setValue('input[type=text]', 'Nightwatch')
      .waitForElementVisible('input[name=btnK]', 5000)
      .click('input[name=btnK]')
      .pause(1000)
      .assert.title('Nightwatch - Google Search')
      .end();
  }
};