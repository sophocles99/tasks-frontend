export default {
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: ['^react$', '^[a-zA-Z\\-]+$', '^@/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  printWidth: 100,
  singleQuote: true,
};
