module.exports = {
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  setupFilesAfterEnv: ["<rootDir>/tests/setupTests.ts"],
  transform: {
    "^.+\\.(jsx|ts|tsx|js)$": "<rootDir>/node_modules/babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  testEnvironment: "jsdom",
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.tsx",
    "!**/*.spec.tsx",
    "!**/_app.tsx",
    "!**/_document.tsx",
  ],
  coverageReporters: ["json", "lcov", "text", "clover"],
};
