export default {
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  importOrder: ["^react$", "^[a-zA-Z\\-]+$", "^@/(.*)$", "^[./]"],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  singleQuote: true
};
