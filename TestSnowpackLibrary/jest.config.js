module.exports = {
  ...require("@snowpack/app-scripts-react/jest.config.js")(),
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  testMatch: null,
  testEnvironment: "jsdom",
  transform: { "\\.[jt]sx?$": "babel-jest" },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  roots: ["src"],
};
