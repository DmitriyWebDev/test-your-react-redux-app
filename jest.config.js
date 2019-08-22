module.exports = {
  verbose: true,
  setupFiles: ['./scripts/setupTests.js', 'jest-canvas-mock'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  collectCoverageFrom: ['<rootDir>/app/**/*.{js,jsx}'],
  testMatch: ['<rootDir>/app/**/?(*.)(spec|test).{js,jsx}'],
  moduleFileExtensions: ['js', 'jsx'],
  roots: ['<rootDir>/app'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
};
