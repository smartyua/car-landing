module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parser: '@babel/eslint-parser',
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'flowtype',
    'babel',
    'import',
    'react',
    'jsx-a11y',
    'promise',
    'unicorn',
    'prettier'
  ],
  rules: {
    'flowtype/define-flow-type': 1,
    'flowtype/use-flow-type': 1,
    'import/no-import-module-exports': 0,
    strict: 0,
    'jsx-a11y/anchor-is-valid': 0,
    indent: ['error', 2, { SwitchCase: 1 }],
    'arrow-parens': 0,
    'no-underscore-dangle': 0,
    'comma-dangle': 0,
    'no-use-before-define': 'error',
    'no-console': 1,
    'no-plusplus': 0,
    camelcase: 0,
    'no-minusminus': 0,
    'react/jsx-one-expression-per-line': 0,
    'jsx-a11y/no-autofocus': 0,
    'no-unused-expressions': 0,
    'react/no-danger': 0,
    'react/button-has-type': 0,
    'react/no-array-index-key': 0,
    'react/jsx-fragments': 0,
    'react/jsx-props-no-spreading': 0,
    'react/self-closing-comp': 0,
    'react/jsx-curly-newline': 0,
    'no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'object-curly-newline': 0,
    'function-paren-newline': 0,
    'no-return-await': 0,
    curly: [2, 'all'],
    'unicorn/no-abusive-eslint-disable': 'error',
    'max-params': ['error', 5],
    'max-depth': ['error', 3],
    'promise/always-return': 'error',
    'promise/catch-or-return': 'error',
    'promise/param-names': 'error',
    'promise/no-return-wrap': 'error',
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'prettier/prettier': ['error']
  }
};

// module.exports = {
//   extends: ['airbnb', 'prettier', 'plugin:security/recommended'],
//   parser: '@babel/eslint-parser',
//   plugins: [
//     'flowtype',
//     'babel',
//     'import',
//     'react',
//     'jsx-a11y',
//     'promise',
//     'unicorn',
//     'prettier',
//     'security'
//   ],
//   env: {
//     node: false,
//     browser: true
//   },
//   parserOptions: {
//     ecmaVersion: 2017,
//     sourceType: 'module',
//     jsx: true,
//     babelOptions: {
//       presets: ['@babel/preset-react']
//     }
//   },
//   settings: {
//     react: {
//       pragma: 'React',
//       version: '16.7'
//     }
//   },
//   rules: {
//     'flowtype/define-flow-type': 1,
//     'flowtype/use-flow-type': 1,
//     'import/no-import-module-exports': 0,
//     strict: 0,
//     'jsx-a11y/anchor-is-valid': 0,
//     indent: ['error', 2, { SwitchCase: 1 }],
//     'arrow-parens': 0,
//     'no-underscore-dangle': 0,
//     'comma-dangle': 0,
//     'no-use-before-define': 'error',
//     'no-console': 1,
//     'no-plusplus': 0,
//     camelcase: 0,
//     'no-minusminus': 0,
//     'react/jsx-one-expression-per-line': 0,
//     'jsx-a11y/no-autofocus': 0,
//     'no-unused-expressions': 0,
//     'react/no-danger': 0,
//     'react/button-has-type': 0,
//     'react/no-array-index-key': 0,
//     'react/jsx-fragments': 0,
//     'react/jsx-props-no-spreading': 0,
//     'react/self-closing-comp': 0,
//     'react/jsx-curly-newline': 0,
//     'no-unused-vars': ['error', { ignoreRestSiblings: true }],
//     'object-curly-newline': 0,
//     'function-paren-newline': 0,
//     'no-return-await': 0,
//     curly: [2, 'all'],
//     'unicorn/no-abusive-eslint-disable': 'error',
//     'max-params': ['error', 5],
//     'max-depth': ['error', 3],
//     'promise/always-return': 'error',
//     'promise/catch-or-return': 'error',
//     'promise/param-names': 'error',
//     'promise/no-return-wrap': 'error',
//     'jsx-a11y/label-has-for': 0,
//     'jsx-a11y/click-events-have-key-events': 0,
//     'jsx-a11y/no-noninteractive-element-interactions': 0,
//     'jsx-a11y/no-static-element-interactions': 0,
//     'prettier/prettier': ['error']
//   }
// };
