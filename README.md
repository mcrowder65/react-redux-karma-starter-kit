# React Redux Karma Starter Kit
[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Total Status][total-image]][total-url]

## Motivation
  - I love React, but I hate setting it up. I seriously wasted my entire Friday night and all day 
 Saturday trying to setup istanbul.
 
## What this provides
- This provides you with a React application that already has webpack, karma, babel, code coverage reports, 
redux, and react-router setup without you having to do anything. For some reason I couldn't find this
anywhere.


## How to use me

Create a directory.

In that directory, do `npm init`, follow the prompts,

then run `npm install react-redux-karma-starter-kit`

NOTE: If you do `--save-dev` or `--save` bad things will happen, so don't do it!!

**SECOND NOTE**: Keep in mind, this deletes your src and test folders and will overwrite other files: `.eslintrc, .babelrc, karma.conf.js, and webpack.config.js`

Once installation is complete, do `npm test` and that will run your unit tests with coverage generated in a coverage folder.

You can also do, `npm start`, which will run `webpack-dev-server`


[npm-image]: https://badge.fury.io/js/react-redux-karma-starter-kit.svg
[npm-url]: https://npmjs.org/package/react-redux-karma-starter-kit

[travis-image]: https://travis-ci.org/mcrowder65/react-redux-karma-starter-kit.svg?branch=master
[travis-url]: https://travis-ci.org/mcrowder65/react-redux-karma-starter-kit

[total-image]: 	https://img.shields.io/npm/dt/react-redux-karma-starter-kit.svg
[total-url]: 	https://img.shields.io/npm/dt/react-redux-karma-starter-kit