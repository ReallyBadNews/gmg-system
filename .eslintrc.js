module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: { jsx: true },
    sourceType: "module",
    ecmaVersion: 6,
    project: "./tsconfig.eslint.json",
  },
  plugins: ["@typescript-eslint"],
  env: {
    browser: true,
    node: true,
  },
  extends: ["airbnb-typescript", "plugin:prettier/recommended"],
  rules: {
    "prettier/prettier": ["error", {}, { usePrettierrc: true }],
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "no-console": ["error", { allow: ["warn", "error"] }],
    quotes: ["error", "double"],
    "react/jsx-sort-props": [
      "error",
      { callbacksLast: true, shorthandLast: true },
    ],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["to"],
      },
    ],
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        labelComponents: [],
        labelAttributes: [],
        controlComponents: [],
        assert: "either",
        depth: 25,
      },
    ],
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ["**/*.ts", "**/*.tsx"],
      rules: {
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/explicit-module-boundary-types": ["error"],
        "@typescript-eslint/no-var-requires": ["error"],
        "@typescript-eslint/explicit-function-return-type": ["error"],
      },
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
};
