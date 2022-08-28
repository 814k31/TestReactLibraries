module.exports = {
  ...require("@snowpack/app-scripts-react/jest.config.js")(),
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  preset: "ts-jest",
  testMatch: null,
  testResultsProcessor: "jest-junit",
  testEnvironment: "jsdom",
};

// /** @type {import('@jest/types').Config.InitialOptions} */
// const config = {
//     roots: ['src'],
//     setupFilesAfterEnv: ['./setupTests.js'],
//     moduleFileExtensions: ['ts', 'tsx', 'js'],
//     testPathIgnorePatterns: ['node_modules/'],
//     transform: {
//         '^.+\\.tsx?$': 'ts-jest'
//     },
//     testMatch: ['**/*.(spec|test).(ts|tsx)'],
//     moduleNameMapper: {
//         // Mocks out all these file formats when tests are run.
//         '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'identity-obj-proxy',
//         '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
//     },
//     verbose: true
// };
// module.exports = config;
