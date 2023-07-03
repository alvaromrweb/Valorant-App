/** @type {import('jest').Config} */
const config = {
  testMatch: [
    '**/tests/unit/**/*.js'
  ],
  testEnvironment: 'jsdom'
};

module.exports = config;