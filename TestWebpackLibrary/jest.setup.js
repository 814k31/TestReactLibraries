module.exports = {
  ...require("@snowpack/app-scripts-react/jest.config.js")(),
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  preset: "ts-jest",
  testMatch: null,
  testResultsProcessor: "jest-junit",
  testEnvironment: "jsdom",
};
