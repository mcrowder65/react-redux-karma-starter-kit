#!/bin/bash

rm -rf ../../src
rm -rf ../../test
cp -rf src ../../src
cp -rf test ../../test
cp .babelrc ../../.babelrc
cp .eslintrc ../../.eslintrc
cp karma.conf.js ../../karma.conf.js
cp webpack.config.js ../../webpack.config.js

npm install --save html-webpack-plugin material-ui material-ui-icons prop-types react react-dom react-redux react-router react-router-dom redux webpack webpack-dev-server
npm install --save-dev babel-core babel-eslint babel-loader babel-plugin-istanbul babel-plugin-transform-es2015-modules-umd babel-plugin-transform-object-rest-spread babel-preset-es2015 babel-preset-react chai css-loader eslint eslint-config-walmart eslint-plugin-filenames eslint-plugin-filenames eslint-plugin-jsx-a11y eslint-plugin-mocha eslint-plugin-react karma karma-babel-preprocessor karma-chai karma-chrome-launcher karma-coverage karma-mocha karma-mocha-reporter karma-sourcemap-loader karma-spec-reporter karma-webpack mocha style-loader