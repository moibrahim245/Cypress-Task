const { defineConfig } = require("cypress");

module.exports = defineConfig({
  fileServerFolder: '.',
    fixturesFolder: './src/fixtures',
    modifyObstructiveCode: false,
    video: true,
    chromeWebSecurity: false,
    defaultCommandTimeout: 30000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    screenshotOnRunFailure: true,
    e2e: {
        baseUrl: 'https://www.jumia.com.eg/',
        setupNodeEvents(on, config) {
          on('after:spec', (spec, results) => {
            if (results && results.stats.failures === 0 && results.video) {
              return fs.unlinkSync(results.video);
            }
          });
        },
        experimentalStudio: true,
        specPattern: './cypress/integration/**/*.cy.{js,jsx,ts,tsx}',
        experimentalSessionAndOrigin: true
    },
    reporter: 'junit',
    reporterOptions: {
        mochaFile: 'cypress/results/results-[hash].xml',
        toConsole: true
    },
    env: {
        localApiUrl: 'http://localhost:3000'
    }
});
