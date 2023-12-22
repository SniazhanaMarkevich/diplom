const path = require('path');

module.exports = {
  testEnvironment: 'node',
  preset: 'ts-jest',
  roots: ['<rootDir>/../tests/'],
  testMatch: ['**/*.spec.ts'],
  setupFilesAfterEnv: ['jest-expect-message'],
  testRunner: 'jest-jasmine2',
  reporters: [
    'default',
    [require.resolve('jest-html-reporter'), {
      pageTitle: 'Test Report',
      outputPath: 'api/jest-html-report/report.html'
    }]
  ]
}
