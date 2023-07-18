module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-type-checked"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        },
        {
            extends: [
                "plugin:@typescript-eslint/recommended-requiring-type-checking",
            ],
            files: ['./**/*.{ts,tsx}']
        },
        {
            extends: [
                "plugin:@typescript-eslint/disable-type-checked"
            ],
            files: ['.eslintrc.cjs']
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        project: true,
        tsconfigRootDir: __dirname,
    },
    "plugins": [
        "@typescript-eslint"
    ],
    rules: {
        
    },
    root: true
}
