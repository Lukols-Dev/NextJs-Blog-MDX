const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  preset: "ts-jest",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "^next-mdx-remote(.*)$": "<rootDir>/__mocks__/next-mdx-remote.js",
    "^rehype-highlight(.*)$": "<rootDir>/__mocks__/rehype-highlight.js",
    "^rehype-slug(.*)$": "<rootDir>/__mocks__/rehype-slug.js",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(next-mdx-remote|rehype-highlight|rehype-slug)/)",
  ],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config);
