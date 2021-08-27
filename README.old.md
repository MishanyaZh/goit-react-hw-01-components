# goit-react-hw-01-components

1. npx create-react-app .

2. npm start

3. npm run build

   4.package.json (top)
   <!-- https://create-react-app.dev/docs/deployment/#github-pages -->

   "homepage": "https://myusername.github.io/my-app",

4. npm run build

5. npm install --save gh-pages

   7.package.json ("scripts") "predeploy": "npm run build", "deploy": "gh-pages
   -d build",

6. npm run deploy

<!-- ------------- -->

9.  npm install --save-dev prettier eslint

10. npx mrm lint-staged

11. (.prettierrc.json) { "printWidth": 80, "tabWidth": 2, "useTabs": false,
    "semi": true, "singleQuote": true, "trailingComma": "all", "bracketSpacing":
    true, "jsxBracketSameLine": false, "arrowParens": "avoid", "proseWrap":
    "always" }
