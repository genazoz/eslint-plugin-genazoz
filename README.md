# ESLint (and Prettier) config

These are settings for ESLint and Prettier used by @genazoz.

## What it does

This setup lints your JavaScript code based on practices. Check the [.eslintrc.js](https://github.com/leonardofaria/eslint-config-leozera/blob/master/.eslintrc.js) file to see what is included. Feel free to override the rules that make sense for you.

## Installing

1. In your project folder, run:

```
npm i -D eslint-plugn-genazoz # or yarn install --dev eslint-plugin-genazoz
npx install-peerdeps --dev eslint-plugin-genazoz
```

2. You will see several dependencies were installed. Now, create (or update) a `.eslintrc` file with the following content:

```js
{
  'extends': [
    'genazoz'
  ]
}
```

3. Copy the [.prettierrc](https://github.com/.../.prettierrc) file from this repository into your project folder

---

This repository is inspired by [eslint-config-wesbos](https://github.com/wesbos/eslint-config-wesbos).
