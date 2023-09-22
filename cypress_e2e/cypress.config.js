const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://notes-serverless-app.com",
    defaultCommandTimeout: 20000,
    requestTimeout: 80000,
    setupNodeEvents(on, config) {
      
    },
  },
})
