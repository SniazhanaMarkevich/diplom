module.exports = {
  env: {
    "browser": true,
    "es2021": true
},
  extends: "standard-with-typescript",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module", 
  },
  rules: {
    semi: "off",
    "@typescript-eslint/semi": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/no-namespace": "off"
  }
}
