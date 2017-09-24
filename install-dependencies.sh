#!/bin/bash

dep=$(node node_modules/react-redux-karma-starter-kit/list-dependencies.js)
npm install --save dep