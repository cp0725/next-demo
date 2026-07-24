/** @type {import("prettier").Config} */
const config = {
  trailingComma: 'all',
  tabWidth: 2,
  printWidth: 80,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  bracketSpacing: true,
  arrowParens: 'always',
  bracketSameLine: false,
  endOfLine: 'lf',
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json',
      },
    },
  ],

  plugins: ['@trivago/prettier-plugin-sort-imports'],

  importOrder: [
    '^react', // React 放最前
    '^@?\\w', // 外部 npm 包
    '<THIRD_PARTY_MODULES>',
    '^@/(.*)', // 内部别名路径
    // 其它相对路径（排除 scss 文件）
    '^[./](?!.*\\.scss$).*',
    // 普通 scss 文件（排除 .pc.scss）
    '^[./](?!.*\\.pc\\.scss$).*\\.scss$',
    // .pc.scss 文件放在普通 scss 之后
    '^[./].*\\.pc\\.scss$',
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
};

export default config;
