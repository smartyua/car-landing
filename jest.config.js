/* global process, module */

module.exports = {
  roots: ['<rootDir>/_tests_'],
  collectCoverageFrom: ['**/*.js'],
  testEnvironment: 'jsdom',
  verbose: true,
  testMatch: ['<rootDir>/_tests_/**/*(*.)@(spec|test).(ts|js)?(x)'],
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['node_modules', 'bower_components'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.jsx?$': 'babel-jest'
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/_tests_/__mocks__/fileMock.js',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  globals: {
    window: {}
  }
};

// module.exports = {
//   rootDir: '..',
//   roots: ['/src/', '/_tests_/'],
//   verbose: true,
//   // collectCoverage,
//   collectCoverageFrom: [
//     '**/*.{js,jsx}',
//     '!**/node_modules/**',
//     '!**/vendor/**'
//   ],
//   coverageDirectory: '/coverage',
//   moduleFileExtensions: ['js', 'jsx'],
//   moduleDirectories: ['node_modules', 'bower_components'],
//   transform: {
//     '^.+\\.js$': 'babel-jest',
//     '^.+\\.jsx?$': 'babel-jest'
//   },
//   transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
//   // setupFilesAfterEnv: ['<rootDir>/tests/__mocks__/test-setup.js'],
//   moduleNameMapper: {
//     '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
//       '<rootDir>/__mocks__/fileMock.js',
//     '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
//   }
//   // 'coverageThreshold': {
//   //   'global': {
//   //     'branches': 70,
//   //     'functions': 85,
//   //     'lines': 85,
//   //     'statements': 85
//   //   }
//   // },
// };
