const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl:"https://magento.softwaretestingboard.com",
    // viewportHeight:500,
    // viewportWidth:500
    watchForFileChanges:true,
    trashAssetsBeforeRuns:true,
    screenshotOnRunFailure:false,
    screenshotsFolder:"MyScreenshot",
    video:false,
    videosFolder:"myVideo",
    videoCompression :0 , 

    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/myReport", // where to save in directory
      overwrite: false,
      html: true,
      json: false,
      timestamp: "mmddyyyy_HHMMss"
    }

  }
});
