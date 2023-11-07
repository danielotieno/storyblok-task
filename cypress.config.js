const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  projectId: 'szt5kr',
  viewportWidth: 1920,
  viewportHeight: 1080,
  watchForFileChanges: false,
  defaultCommandTimeout: 20000,
  chromeWebSecurity: false,
  requestTimeout: 30000,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      allureWriter(on, config);
      return config;
    },
    baseUrl: 'https://app.storyblok.com/#/login',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
});