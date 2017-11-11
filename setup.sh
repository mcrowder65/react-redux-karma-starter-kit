#!/bin/bash

rm -rf ../../src
rm -rf ../../test
cp -rf src ../../src
cp -rf test ../../test
cp .babelrc ../../.babelrc
cp .eslintrc ../../.eslintrc
cp karma.conf.js ../../karma.conf.js
cp webpack.config.js ../../webpack.config.js

cd ../..
echo "PWD: " $(pwd)
echo "running npm install --save " $(node node_modules/react-redux-karma-starter-kit/list-dependencies.js)
npm install --save $(node node_modules/react-redux-karma-starter-kit/list-dependencies.js)

echo "running npm install --save-dev" $(node node_modules/react-redux-karma-starter-kit/list-dev-dependencies.js)
npm install --save-dev $(node node_modules/react-redux-karma-starter-kit/list-dev-dependencies.js)

mv node_modules/react-redux-karma-starter-kit/script-writer.js .
node script-writer.js
rm script-writer.js

npm uninstall --save react-redux-karma-starter-kit
npm uninstall --save-dev react-redux-karma-starter-kit