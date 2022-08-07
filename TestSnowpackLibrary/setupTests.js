require("@testing-library/jest-dom/extend-expect");
const testingLibrary = require("@testing-library/react");

testingLibrary.configure({ testIdAttribute: "data-test-id" });

afterEach(() => {
  jest.clearAllMocks();
});
