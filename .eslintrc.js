module.exports = {
  parser: "babel-eslint",
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  plugins: ["react-hooks", "genazoz-lint"],
  rules: {
    // We can include or exclude prefix. You can add more option here like message, ignore case etc.
    "genazoz-lint/func-prefix-matching": [
      2,
      {
        include: ["to"],
        exclude: ["excludeSomeFunction"],
        message: "",
      },
    ],
    "react-hooks/rules-of-hooks": "error",
    "import/extensions": "off",
    "import/no-dynamic-require": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-named-as-default": "off",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "newline-per-chained-call": "off",
    "jsx-a11y/label-has-for": [
      "warn",
      {
        required: {
          some: ["nesting", "id"],
        },
      },
    ],
    "no-confusing-arrow": "off",
    "no-use-before-define": "off",
    "prefer-template": "error",
    "require-yield": "off",
    "react/forbid-prop-types": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-no-target-blank": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-sort-props": [
      "warn",
      {
        callbacksLast: true,
        shorthandFirst: false,
        shorthandLast: true,
        ignoreCase: true,
        noSortAlphabetically: false,
      },
    ],
    "react/require-extension": "off",
    "react/sort-prop-types": [
      "warn",
      {
        callbacksLast: true,
        ignoreCase: true,
        requiredFirst: false,
        sortShapeProp: true,
      },
    ],
    "react/react-in-jsx-scope": "off",
  },
};
