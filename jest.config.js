module.exports = {
    transform: {
      "^.+\\.js$": "babel-jest",
    },
    moduleNameMapper: {
        "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js",
    },
    testEnvironment: 'jsdom'
  };
  