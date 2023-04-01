const { rules: baseBestPracticesRules } = require('eslint-config-airbnb-base/rules/best-practices');
const { rules: baseErrorsRules } = require('eslint-config-airbnb-base/rules/errors');
const { rules: baseES6Rules } = require('eslint-config-airbnb-base/rules/es6');
const { rules: baseImportsRules } = require('eslint-config-airbnb-base/rules/imports');
const { rules: baseStyleRules } = require('eslint-config-airbnb-base/rules/style');
const { rules: baseVariablesRules } = require('eslint-config-airbnb-base/rules/variables');

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  extends: ['airbnb', 'prettier'],
  plugins: ['react', 'jsx-a11y', 'import', '@typescript-eslint', 'prettier'],

  env: {
    browser: true,
    jquery: true,
    node: true,
    es6: true,
    worker: true,
    amd: true,
    jest: true,
  },
  globals: {
    app: 'readonly', // custom window property
    gtag: 'readonly', //google analytics
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'max-classes-per-file': 'off',
    /*
     * javascript rules
     */
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],

    'linebreak-style': 'off',
    'no-underscore-dangle': [
      'error',
      {
        allowAfterThis: true,
      },
    ],
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'no-param-reassign': ['error', { props: true }],
    'max-len': [
      'error',
      160,
      2,
      {
        ignoreUrls: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],

    'arrow-body-style': 'off',

    // bug on line 1:1
    'unicode-bom': 'off',

    'class-methods-use-this': 'off',

    'no-bitwise': ['error', { allow: ['|', '&'] }],

    /*
     * import rules
     */
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',

    /*
     * react rules
     */
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.tsx'] }],
    'react/sort-comp': 'off',
    'react/jsx-fragments': ['error', 'element'],
    'react/jsx-props-no-spreading': 'off',
    // TODO: enabled?
    // we dont use prop-types in this project
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'react/button-has-type': 'off',
    'react/function-component-definition': 'off',

    /*
     * typescript rules
     */
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],

    '@typescript-eslint/adjacent-overload-signatures': 'error',

    '@typescript-eslint/array-type': 'error',

    '@typescript-eslint/await-thenable': 'error',

    '@typescript-eslint/ban-ts-comment': 'error',

    '@typescript-eslint/ban-types': 'error',

    '@typescript-eslint/consistent-type-assertions': 'error',

    // airbnb config disabled this rule
    '@typescript-eslint/default-param-last': 'error',

    // off for linting js-files
    '@typescript-eslint/explicit-function-return-type': 'off',

    // off for linting js-files
    '@typescript-eslint/explicit-member-accessibility': 'off',

    // Replace Airbnb 'brace-style' rule with '@typescript-eslint' version
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': baseStyleRules['func-call-spacing'],

    '@typescript-eslint/generic-type-naming': 'off',

    '@typescript-eslint/member-delimiter-style': 'error',

    '@typescript-eslint/member-naming': 'off',

    '@typescript-eslint/member-ordering': 'off',

    '@typescript-eslint/naming-convention': 'off',

    // Replace Airbnb 'no-array-constructor' rule with '@typescript-eslint' version
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': baseStyleRules['no-array-constructor'],

    '@typescript-eslint/no-dynamic-delete': 'error',

    // Replace Airbnb 'no-empty-function' rule with '@typescript-eslint' version
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': baseBestPracticesRules['no-empty-function'],

    '@typescript-eslint/no-empty-interface': 'error',

    '@typescript-eslint/no-explicit-any': 'error',

    '@typescript-eslint/no-extra-non-null-assertion': 'error',

    // Replace Airbnb 'no-extra-parens' rule with '@typescript-eslint' version
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': baseErrorsRules['no-extra-parens'],

    // Replace Airbnb 'no-extra-semi' rule with '@typescript-eslint' version
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': baseErrorsRules['no-extra-semi'],

    '@typescript-eslint/no-extraneous-class': 'error',

    '@typescript-eslint/no-for-in-array': 'error',

    '@typescript-eslint/no-implied-eval': 'error',

    '@typescript-eslint/no-inferrable-types': 'off',

    // Replace Airbnb 'no-magic-numbers' rule with '@typescript-eslint' version
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': baseBestPracticesRules['no-magic-numbers'],

    '@typescript-eslint/no-floating-promises': 'off',

    '@typescript-eslint/no-misused-new': 'error',

    '@typescript-eslint/no-misused-promises': 'off',

    '@typescript-eslint/no-namespace': 'error',

    '@typescript-eslint/no-non-null-assertion': 'error',

    '@typescript-eslint/no-parameter-properties': 'error',

    '@typescript-eslint/no-require-imports': 'error',

    '@typescript-eslint/no-this-alias': 'error',

    '@typescript-eslint/no-throw-literal': 'error',

    '@typescript-eslint/no-type-alias': 'off',

    '@typescript-eslint/no-unnecessary-condition': 'off',

    '@typescript-eslint/no-unnecessary-qualifier': 'off',

    '@typescript-eslint/no-unnecessary-type-arguments': 'off',

    '@typescript-eslint/no-unnecessary-type-assertion': 'off',

    // Replace Airbnb 'no-unused-expressions' rule with '@typescript-eslint' version
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': baseBestPracticesRules['no-unused-expressions'],

    // Replace Airbnb 'no-unused-vars' rule with '@typescript-eslint' version
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': baseVariablesRules['no-unused-vars'],

    // Replace Airbnb 'no-use-before-define' rule with '@typescript-eslint' version
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': baseVariablesRules['no-use-before-define'],

    // Replace Airbnb 'no-useless-constructor' rule with '@typescript-eslint' version
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': baseES6Rules['no-useless-constructor'],

    '@typescript-eslint/no-var-requires': 'error',

    '@typescript-eslint/prefer-for-of': 'error',

    '@typescript-eslint/prefer-function-type': 'off',

    '@typescript-eslint/prefer-includes': 'error',

    // using es6 modules instead namespace
    '@typescript-eslint/prefer-namespace-keyword': 'off',

    // TODO: enable after update typescript package to 3.7v
    '@typescript-eslint/prefer-nullish-coalescing': 'off',

    // TODO: enable after update typescript package to 3.7v
    '@typescript-eslint/prefer-optional-chain': 'off',

    '@typescript-eslint/prefer-readonly': 'off',

    // TODO: enable?
    '@typescript-eslint/prefer-regexp-exec': 'off',

    '@typescript-eslint/prefer-string-starts-ends-with': 'error',

    // TODO: enable?
    '@typescript-eslint/promise-function-async': 'off',

    // Replace Airbnb 'quotes' rule with '@typescript-eslint' version
    quotes: 'off',
    '@typescript-eslint/quotes': baseStyleRules.quotes,

    '@typescript-eslint/require-array-sort-compare': 'error',

    // Replace Airbnb 'require-await' rule with '@typescript-eslint' version
    'require-await': 'off',
    '@typescript-eslint/require-await': baseBestPracticesRules['require-await'],

    '@typescript-eslint/restrict-plus-operands': 'off',

    '@typescript-eslint/restrict-template-expressions': 'off',

    '@typescript-eslint/return-await': 'off',

    // Replace Airbnb 'semi' rule with '@typescript-eslint' version
    semi: 'off',
    '@typescript-eslint/semi': baseStyleRules.semi,

    // Replace Airbnb 'space-before-function-paren' rule with '@typescript-eslint' version
    '@typescript-eslint/space-before-function-paren': baseStyleRules['space-before-function-paren'],

    // TODO: enable?
    '@typescript-eslint/strict-boolean-expressions': 'off',

    '@typescript-eslint/triple-slash-reference': 'error',

    '@typescript-eslint/type-annotation-spacing': 'error',

    '@typescript-eslint/typedef': 'off',

    '@typescript-eslint/unified-signatures': 'error',

    'react/prop-types': 0,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/unbound-method': 'error',

        '@typescript-eslint/typedef': [
          'off',
          {
            arrayDestructuring: false,
            arrowParameter: false,
            memberVariableDeclaration: false,
            objectDestructuring: false,
            parameter: true,
            propertyDeclaration: true,
            variableDeclaration: false,
            variableDeclarationIgnoreFunction: false,
          },
        ],
      },
    },
  ],
};
