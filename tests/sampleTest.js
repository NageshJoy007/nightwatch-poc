module.exports = {
    'sampleTestCase': function (browser) {
      browser
        .url('https://google.co.in')
        .windowMaximize()
        .waitForElementVisible('body', 7000)  
        .sendKeys('.gLFyf.gsfi','Hello World')
        .pause(3000)
        .click('.VlcLAe>center>input[name="btnK"]')
        .assert.elementPresent('div.r>a>h3')
        .end();
    }
   };