module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['composes', 'include']
      }
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'extend',
          'composes',
          'mixin',
          'if',
          'each',
          'include',
          'else'
        ]
      }
    ],
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignoreAtRules: ['import']
      }
    ],
    'declaration-empty-line-before': [
      'always',
      {
        except: ['after-declaration', 'first-nested', 'after-comment'],
        ignore: ['after-comment', 'inside-single-line-block']
      }
    ]
  }
};
