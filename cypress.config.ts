const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://app.cymulate.com/login',
    testIsolation: false
  }
});
