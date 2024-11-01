const plugins = ['react', 'react-hooks', 'import']

module.exports = {
  extends: ['universe', 'plugin:import/typescript'],
  plugins,
  rules: {
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'comma-dangle': ['error', 'never'],
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'no-console': 'warn',
    'no-unused-vars': 'error',
    'import/no-cycle': 'error'
  }
}
