const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    specPattern:"**/*.{feature,cy.js}",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
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
