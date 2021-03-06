module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "@typescript-eslint/tslint",
        "prefer-arrow"
    ],
    "rules": {
        "accessor-pairs": "off",
        "array-bracket-newline": "off",
        "array-bracket-spacing": [
            "error",
            "never"
        ],
        "array-callback-return": "off",
        "array-element-newline": "off",
        "arrow-body-style": "error",
        "arrow-parens": [
            "off",
            "as-needed"
        ],
        "arrow-spacing": "off",
        "block-scoped-var": "off",
        "block-spacing": "off",
        "brace-style": "off",
        "callback-return": "off",
        "camelcase": "error",
        "capitalized-comments": "off",
        "class-methods-use-this": "off",
        "comma-dangle": "error",
        "comma-spacing": "off",
        "comma-style": "off",
        "complexity": "off",
        "computed-property-spacing": "off",
        "consistent-return": "off",
        "consistent-this": "off",
        "constructor-super": "error",
        "curly": "error",
        "default-case": "off",
        "dot-location": "off",
        "dot-notation": "error",
        "eol-last": "error",
        "eqeqeq": [
            "error",
            "smart"
        ],
        "for-direction": "off",
        "func-call-spacing": "off",
        "func-name-matching": "off",
        "func-names": "off",
        "func-style": "off",
        "function-paren-newline": "off",
        "generator-star-spacing": "off",
        "getter-return": "off",
        "global-require": "off",
        "guard-for-in": "off",
        "handle-callback-err": "off",
        "id-blacklist": "error",
        "id-length": "off",
        "id-match": "error",
        "implicit-arrow-linebreak": "off",
        "indent": [
            "error",
            2,
            {
                "SwitchCase": 1
            }
        ],
        "indent-legacy": "off",
        "init-declarations": "off",
        "jsx-quotes": "off",
        "key-spacing": "off",
        "keyword-spacing": "off",
        "line-comment-position": "off",
        "linebreak-style": "error",
        "lines-around-comment": "off",
        "lines-around-directive": "off",
        "lines-between-class-members": "off",
        "max-depth": "off",
        "max-len": [
            "error",
            {
                "ignorePattern": "^import",
                "code": 120
            }
        ],
        "max-lines": "off",
        "max-nested-callbacks": "off",
        "max-params": "off",
        "max-statements": "off",
        "max-statements-per-line": "off",
        "multiline-comment-style": "off",
        "multiline-ternary": "off",
        "new-cap": "off",
        "new-parens": "error",
        "newline-after-var": "off",
        "newline-before-return": "off",
        "newline-per-chained-call": "off",
        "no-alert": "off",
        "no-array-constructor": "off",
        "no-await-in-loop": "off",
        "no-bitwise": "error",
        "no-buffer-constructor": "off",
        "no-caller": "error",
        "no-case-declarations": "error",
        "no-catch-shadow": "off",
        "no-class-assign": "error",
        "no-compare-neg-zero": "error",
        "no-cond-assign": "off",
        "no-confusing-arrow": "off",
        "no-console": "off",
        "no-const-assign": "error",
        "no-constant-condition": "error",
        "no-continue": "off",
        "no-control-regex": "off",
        "no-debugger": "error",
        "no-delete-var": "error",
        "no-div-regex": "off",
        "no-dupe-args": "error",
        "no-dupe-class-members": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-duplicate-imports": "off",
        "no-else-return": "off",
        "no-empty": "error",
        "no-empty-character-class": "error",
        "no-empty-function": "off",
        "no-empty-pattern": "error",
        "no-eq-null": "off",
        "no-eval": "error",
        "no-ex-assign": "error",
        "no-extend-native": "off",
        "no-extra-bind": "off",
        "no-extra-boolean-cast": "error",
        "no-extra-label": "off",
        "no-extra-parens": "off",
        "no-extra-semi": "error",
        "no-fallthrough": "off",
        "no-floating-decimal": "off",
        "no-func-assign": "error",
        "no-global-assign": "error",
        "no-implicit-coercion": "off",
        "no-implicit-globals": "off",
        "no-implied-eval": "off",
        "no-inline-comments": "off",
        "no-inner-declarations": "error",
        "no-invalid-regexp": "error",
        "no-invalid-this": "error",
        "no-irregular-whitespace": "error",
        "no-iterator": "off",
        "no-label-var": "off",
        "no-labels": "off",
        "no-lone-blocks": "off",
        "no-lonely-if": "off",
        "no-loop-func": "off",
        "no-magic-numbers": "off",
        "no-mixed-operators": "off",
        "no-mixed-requires": "off",
        "no-mixed-spaces-and-tabs": "error",
        "no-multi-assign": "off",
        "no-multi-spaces": "off",
        "no-multi-str": "off",
        "no-multiple-empty-lines": "error",
        "no-native-reassign": "off",
        "no-negated-condition": "off",
        "no-negated-in-lhs": "off",
        "no-nested-ternary": "off",
        "no-new": "off",
        "no-new-func": "off",
        "no-new-object": "off",
        "no-new-require": "off",
        "no-new-symbol": "error",
        "no-new-wrappers": "error",
        "no-obj-calls": "error",
        "no-octal": "error",
        "no-octal-escape": "off",
        "no-param-reassign": "off",
        "no-path-concat": "off",
        "no-plusplus": "off",
        "no-process-env": "off",
        "no-process-exit": "off",
        "no-proto": "off",
        "no-prototype-builtins": "off",
        "no-redeclare": "error",
        "no-regex-spaces": "error",
        "no-restricted-globals": "off",
        "no-restricted-imports": "off",
        "no-restricted-modules": "off",
        "no-restricted-properties": "off",
        "no-restricted-syntax": "off",
        "no-return-assign": "off",
        "no-return-await": "off",
        "no-script-url": "off",
        "no-self-assign": "error",
        "no-self-compare": "off",
        "no-sequences": "off",
        "no-shadow": [
            "error",
            {
                "hoist": "all"
            }
        ],
        "no-shadow-restricted-names": "off",
        "no-spaced-func": "off",
        "no-sparse-arrays": "error",
        "no-sync": "off",
        "no-tabs": "off",
        "no-template-curly-in-string": "off",
        "no-ternary": "off",
        "no-this-before-super": "error",
        "no-throw-literal": "error",
        "no-trailing-spaces": "error",
        "no-undef": "error",
        "no-undef-init": "error",
        "no-undefined": "off",
        "no-underscore-dangle": "error",
        "no-unexpected-multiline": "error",
        "no-unmodified-loop-condition": "off",
        "no-unneeded-ternary": "off",
        "no-unreachable": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-unused-expressions": "error",
        "no-unused-labels": "error",
        "no-unused-vars": "error",
        "no-use-before-define": "off",
        "no-useless-call": "off",
        "no-useless-computed-key": "off",
        "no-useless-concat": "off",
        "no-useless-constructor": "off",
        "no-useless-escape": "error",
        "no-useless-rename": "off",
        "no-useless-return": "off",
        "no-var": "error",
        "no-void": "off",
        "no-warning-comments": "off",
        "no-whitespace-before-property": "off",
        "no-with": "error",
        "nonblock-statement-body-position": "off",
        "object-curly-newline": "off",
        "object-curly-spacing": [
            "error",
            "never"
        ],
        "object-property-newline": "off",
        "object-shorthand": "error",
        "one-var": [
            "error",
            "never"
        ],
        "one-var-declaration-per-line": "off",
        "operator-assignment": "off",
        "operator-linebreak": "off",
        "padded-blocks": "off",
        "padding-line-between-statements": "off",
        "prefer-arrow-callback": "error",
        "prefer-const": "error",
        "prefer-destructuring": "off",
        "prefer-numeric-literals": "off",
        "prefer-promise-reject-errors": "off",
        "prefer-reflect": "off",
        "prefer-rest-params": "off",
        "prefer-spread": "off",
        "prefer-template": "off",
        "quote-props": [
            "error",
            "consistent-as-needed"
        ],
        "quotes": [
            "error",
            "single",
            "avoid-escape"
        ],
        "radix": "error",
        "require-await": "off",
        "require-jsdoc": "off",
        "require-yield": "error",
        "rest-spread-spacing": "off",
        "semi": "error",
        "semi-spacing": "off",
        "semi-style": "off",
        "sort-imports": "off",
        "sort-keys": "off",
        "sort-vars": "off",
        "space-before-blocks": "error",
        "space-before-function-paren": [
            "error",
            {
                "anonymous": "never",
                "asyncArrow": "always",
                "named": "never"
            }
        ],
        "space-in-parens": [
            "error",
            "never"
        ],
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "spaced-comment": "error",
        "strict": "off",
        "switch-colon-spacing": "off",
        "symbol-description": "off",
        "template-curly-spacing": "off",
        "template-tag-spacing": "off",
        "unicode-bom": "off",
        "use-isnan": "error",
        "valid-jsdoc": "off",
        "valid-typeof": "off",
        "vars-on-top": "off",
        "wrap-iife": "off",
        "wrap-regex": "off",
        "yield-star-spacing": "off",
        "yoda": "off",
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/array-type": "error",
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/ban-types": "error",
        "@typescript-eslint/class-name-casing": "error",
        "@typescript-eslint/consistent-type-assertions": "error",
        "@typescript-eslint/consistent-type-definitions": "off",
        "@typescript-eslint/explicit-member-accessibility": [
            "error",
            {
                "accessibility": "explicit"
            }
        ],
        "@typescript-eslint/indent": [
            "error",
            2,
            {
                "FunctionDeclaration": {
                    "parameters": "first"
                },
                "FunctionExpression": {
                    "parameters": "first"
                }
            }
        ],
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                "multiline": {
                    "delimiter": "semi",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "semi",
                    "requireLast": false
                }
            }
        ],
        "@typescript-eslint/member-ordering": "error",
        "@typescript-eslint/no-empty-function": "error",
        "@typescript-eslint/no-empty-interface": "error",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/promise-function-async": "error",
        "@typescript-eslint/quotes": [
            "error",
            "single"
        ],
        "@typescript-eslint/semi": [
            "error",
            "always"
        ],
        "@typescript-eslint/triple-slash-reference": "error",
        "@typescript-eslint/type-annotation-spacing": "error",
        "@typescript-eslint/unified-signatures": "error",
        "import/order": "off",
        "max-classes-per-file": "off",
        "@typescript-eslint/tslint/config": [
            "error",
            {
                "rules": {
                    "encoding": true,
                    "import-spacing": true,
                    "jsdoc-format": true,
                    "match-default-export-name": true,
                    "no-boolean-literal-compare": true,
                    "no-reference-import": true,
                    "typedef": [
                        true,
                        "member-variable-declaration",
                        "parameter",
                        "property-declaration"
                    ],
                    "whitespace": [
                        true,
                        "check-branch",
                        "check-decl",
                        "check-operator",
                        "check-separator",
                        "check-rest-spread",
                        "check-type",
                        "check-typecast",
                        "check-type-operator",
                        "check-preblock"
                    ]
                }
            }
        ]
    }
};
