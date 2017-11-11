# React Redux Karma Starter Kit

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

Once installation is complete, do `node_modules/karma/bin/karma start` and that will run your unit tests with coverage generated in a coverage folder.

I'll be adding scripts along with the install process, but if you do `node_modules/webpack-dev-server/bin/webpack-dev-server.js` it will run the app!
