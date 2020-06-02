module.exports = {
    parser: "babel-eslint",
    plugins: [
        "react"
    ],
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended"
    ],
    env: {
        browser: true,
        node: true,
        es6: true
    },
    rules: {
        "no-restricted-imports": [
            "error",
            {
                "patterns": ["@material-ui/*/*/*", "!@material-ui/core/test-utils/*"]
            }
        ]
    },
    overrides: [
        {
            files: ['**/*.ts','**/*.tsx'],
            parser: '@typescript-eslint/parser',
            rules: {
                'no-undef': 'off',
                'no-unused-vars': 'off'
            },
            parserOptions: {
                sourceType: "module"
            }
        }
    ]
};
