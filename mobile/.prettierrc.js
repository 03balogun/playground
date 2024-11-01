module.exports = {
  arrowParens: 'avoid',
  bracketSpacing: true,
  bracketSameLine: true,
  singleQuote: true,
  trailingComma: 'none',
  semi: false,
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  parser: 'typescript',
  importOrder: [
    '^(react|react-native)$',
    '<THIRD_PARTY_MODULES>',
    '^@ui/(.*)$',
    '^[./]'
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'tsx', 'decorators-legacy']
}
