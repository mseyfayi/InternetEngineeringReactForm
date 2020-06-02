module.exports = {
    parser: "babel-eslint",
    plugins: [
        "react"
    ],
    extends: [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    env: {
        browser: true,
        node: true
    },
    "rules": {
        "no-restricted-imports": [
            "error",
            {
                "patterns": ["@material-ui/*/*/*", "!@material-ui/core/test-utils/*"]
            }
        ]
    }
};
