module.exports = {
  env: {
    commonjs: true,
    node: true,
    es6: true
  },
  extends: [
    "eslint:recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:prettier/recommended" // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  ignorePatterns: ["dist/"],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module" // Allows for the use of imports
  },
  "overrides": [
    {
      "files": ["**/*.ts", "**/*.tsx"],
      "extends": [
        "eslint:recommended",
        'plugin:@typescript-eslint/eslint-recommended',
        "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        "plugin:prettier/recommended" // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
      ],
      "parser": "@typescript-eslint/parser",
    }
  ]
}
