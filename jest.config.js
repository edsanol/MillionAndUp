module.exports = {
  preset: 'react-native',
  testMatch: ['**/__tests__/**/*.test.{js,jsx,ts,tsx}'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  moduleNameMapper: {
    'react-navigation-shared-element': require.resolve(
      'react-navigation-shared-element',
    ),
  },
};
