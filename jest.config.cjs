module.exports = {
  testEnvironment: 'node', // 'node' or 'jsdom' depending on your project
  // add other configurations as needed
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      tsconfig: 'tsconfig.json',
      // Any other ts-jest specific options
    }],
  },
};