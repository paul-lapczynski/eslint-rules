/* tslint:disable:quotemark */
/* tslint:disable:object-literal-key-quotes */
export const DEFAULT_TSLINT_CONFIG = {
  "extends": [
    "tslint:recommended",
    "tslint-eslint-rules"
  ],
  "rulesDirectory": [
    "./rules"
  ],
  "rules": {
    // Custom rules
    "invalid-relative-import-prefix": true,
    "require-private-modifier": true,
    "require-private-underscore": true,

    // eslint rules
    "brace-style": [
      true,
      "1tbs"
    ],

    // tslint rules
    "max-classes-per-file": [false],
    "no-angle-bracket-type-assertion": false,
    "member-access": true,
    "member-ordering": [false],
    "ordered-imports": [false],
    "max-line-length": [false],
    "comment-format": [false],
    "one-variable-per-declaration": [true],
    "no-any": false,
    "arrow-parens": [true, "ban-single-arg-parens"],
    "no-inferrable-types": false,
    "no-internal-module": true,
    "no-var-requires": false,
    "typedef": [true],
    "import-spacing": true,
    "typedef-whitespace": [
      true,
      {
        "call-signature": "nospace",
        "index-signature": "nospace",
        "parameter": "nospace",
        "property-declaration": "nospace",
        "variable-declaration": "nospace"
      },
      {
        "call-signature": "space",
        "index-signature": "space",
        "parameter": "space",
        "property-declaration": "space",
        "variable-declaration": "space"
      }
    ],

    "ban": false,
    "curly": true,
    "forin": true,
    "label-position": true,
    "no-arg": true,
    "no-bitwise": false,
    "no-conditional-assignment": true,
    "no-console": [
      true,
      "debug",
      "info",
      "time",
      "timeEnd",
      "trace"
    ],
    "no-construct": true,
    "no-debugger": true,
    "no-duplicate-variable": true,
    "no-empty": false,
    "no-empty-interface": false,
    "no-eval": true,
    "no-null-keyword": false,
    "no-shadowed-variable": true,
    "no-string-literal": false,
    "no-switch-case-fall-through": true,
    "no-unused-expression": true,
    "no-var-keyword": false,
    "radix": true,
    "switch-default": false,
    "triple-equals": [
      true,
      "allow-null-check"
    ],
    "eofline": true,
    "indent": [
      true,
      "spaces"
    ],
    "no-require-imports": false,
    "no-trailing-whitespace": false,
    "object-literal-sort-keys": false,
    "trailing-comma": [
      true,
      {
        "multiline": false,
        "singleline": "never"
      }
    ],
    "align": [true],
    "class-name": true,
    "interface-name": [true],
    "no-default-export": true,
    "jsdoc-format": true,
    "no-consecutive-blank-lines": false,
    "one-line": [
      false,
      "check-open-brace",
      "check-catch",
      "check-else",
      "check-finally",
      "check-whitespace"
    ],
    "quotemark": [
      true,
      "single",
      "avoid-escape"
    ],
    "semicolon": [true, "always"],
    "variable-name": [
      true,
      "check-format",
      "allow-leading-underscore",
      "ban-keywords"
    ],
    "whitespace": [
      true,
      "check-branch",
      "check-decl",
      "check-operator",
      "check-module",
      "check-separator",
      "check-type",
      "check-preblock"
    ]
  }
};
