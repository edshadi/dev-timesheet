module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "plugins": [
    "react",
    "mocha"
  ],
  "rules": {
    "mocha/no-exclusive-tests": "error"
  },
  "env": {
    "jquery": true
  },
  "ecmaFeatures": {
    "experimentalDecorators": true,
  }
};
