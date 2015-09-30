module.exports = {
  env: {
    browser: true,
    node: true,
    amd: true,
    es6: true
  },
  rules: {
    // Possible errors
    'comma-dangle': 0,
    'no-cond-assign': 0, // used in codemirror
    'no-console': 0,
    'no-constant-condition': 0, // used in codemirror
    'no-control-regex': 2,
    'no-debugger': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty-character-class': 2,
    'no-empty': 0, // used in backbone
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': [2, 'functions'], // used in underscore
    'no-extra-semi': 0, // used in codemirror
    'no-func-assign': 0, // used in codemirror
    'no-inner-declarations': 2,
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-negated-in-lhs': 2,
    'no-obj-calls': 2,
    'no-regex-spaces': 2,
    'no-sparse-arrays': 2,
    'no-unreachable': 2,
    'use-isnan': 2,
    'valid-jsdoc': 0,
    'valid-typeof': 2,
    'no-unexpected-multiline': 2,

    // Best practices
    'accessor-pairs': 2,
    'block-scoped-var': 0, // used in underscore
    'complexity': 0,
    'consistent-return': 0, // used in backbone
    'curly': 0,
    'default-case': 0,
    'dot-notation': 0,
    'dot-location': 0,
    'eqeqeq': 0, // used in underscore
    'guard-for-in': 0,
    'no-alert': 0,
    'no-caller': 2,
    'no-div-regex': 2,
    'no-else-return': 0, // used in codemirror
    'no-empty-label': 2,
    'no-eq-null': 0, // used in underscore
    'no-eval': 0,
    'no-extend-native': 0,
    'no-extra-bind': 0, // used by yo
    'no-fallthrough': 0,
    'no-floating-decimal': 0,
    'no-implicit-coercion': 0,
    'no-implied-eval': 0,
    'no-invalid-this': 0,
    'no-iterator': 0,
    'no-labels': 0,
    'no-lone-blocks': 2,
    'no-loop-func': 0, // used in codemirror
    'no-multi-spaces': 0, // used in backbone
    'no-multi-str': 2,
    'no-native-reassign': 0,
    'no-new-func': 0,
    'no-new-wrappers': 0,
    'no-new': 0,
    'no-octal-escape': 0,
    'no-octal': 2,
    'no-param-reassign': 0,
    'no-process-env': 0,
    'no-proto': 0,
    'no-redeclare': 0, // used in codemirror
    'no-return-assign': 0,
    'no-script-url': 0,
    'no-self-compare': 0,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-unused-expressions': {
      allowShortCircuit: true
    }, // used in backbone
    'no-useless-call': 2,
    'no-useless-concat': 2,
    'no-void': 0, // used in underscore
    'no-warning-comments': 0,
    'no-with': 2,
    'radix': 0, // used in codemirror
    'vars-on-top': 0,
    'wrap-iife': 0,
    'yoda': 0,

    // Strict
    'strict': 0,

    // Variables
    'init-declarations': 0,
    'no-catch-shadow': 0, // used in codemirror
    'no-delete-var': 2,
    'no-label-var': 2,
    'no-shadow-restricted-names': 2,
    'no-shadow': 0, // used in backbone
    'no-undef-init': 2,
    'no-undef': 0,
    'no-undefined': 0, // used in codemirror
    'no-unused-vars': 0,
    'no-use-before-define': 0, // used in backbone

    // Node
    'callback-return': 0,
    'global-require': 0,
    'handle-callback-err': 0,
    'no-mixed-requires': 0,
    'no-new-require': 0,
    'no-path-concat': 0,
    'no-process-exit': 0,
    'no-restricted-modules': 0,
    'no-sync': 0,

    // Style
    'array-bracket-spacing': 0,
    'block-spacing': 0,
    'brace-style': 0,
    'camelcase': 0,
    'comma-spacing': 0,
    'comma-style': 0,
    'computed-property-spacing': 0,
    'consistent-this': 0,
    'eol-last': 2,
    'func-names': 0,
    'func-style': 0,
    'id-length': 0,
    'id-match': 0,
    'indent': 0,
    'jsx-quotes': 0,
    'key-spacing': 0,
    'lines-around-comment': 0,
    'linebreak-style': 0, // git will make this lf anyway
    'max-nested-callbacks': 0,
    'new-cap': 0,
    'new-parens': 0,
    'newline-after-var': 0,
    'no-array-constructor': 0,
    'no-continue': 0,
    'no-inline-comments': 0,
    'no-lonely-if': 0,
    'no-mixed-spaces-and-tabs': 0,
    'no-multiple-empty-lines': 0,
    'no-nested-ternary': 0,
    'no-new-object': 0,
    'no-restricted-syntax': 0,
    'no-spaced-func': 0,
    'no-ternary': 0,
    'no-trailing-spaces': [2, {
      skipBlankLines: true
    }],
    'no-underscore-dangle': 0,
    'no-unneeded-ternary': 0,
    'object-curly-spacing': 0,
    'one-var': 0,
    'operator-assignment': 0,
    'operator-linebreak': 0,
    'padded-blocks': 0,
    'quote-props': 0,
    'quotes': 0,
    'require-jsdoc': 0,
    'semi-spacing': 0,
    'semi': 0,
    'sort-vars': 0,
    'space-after-keywords': 0,
    'space-before-keywords': 0,
    'space-before-blocks': 0,
    'space-before-function-paren': 0,
    'space-in-parens': 0,
    'space-infix-ops': 0,
    'space-return-throw-case': 0,
    'space-unary-ops': 0,
    'spaced-comment': 0,
    'wrap-regex': 0,

    // ES6
    'arrow-parens': 0,
    'arrow-spacing': 0,
    'constructor-super': 2,
    'generator-star-spacing': 0,
    'no-class-assign': 2,
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-this-before-super': 2,
    'no-var': 0,
    'object-shorthand': 0,
    'prefer-arrow-callback': 0,
    'prefer-const': 0,
    'prefer-spread': 0,
    'prefer-reflect': 0,
    'prefer-template': 0,
    'require-yield': 0
  }
}
