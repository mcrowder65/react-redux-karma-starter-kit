#!/bin/bash

rm -rf ../../src
rm -rf ../../test
cp -rf src ../../src
cp -rf test ../../test
cp .babelrc ../../.babelrc
cp .eslintrc ../../.eslintrc
cp karma.conf.js ../../karma.conf.js
cp webpack.config.js ../../webpack.config.js

sh install-dependencies.sh
sh install-dev-dependencies.sh
npm uninstall --save react-redux-karma-starter-kit
npm uninstall --save-dev react-redux-karma-starter-kit