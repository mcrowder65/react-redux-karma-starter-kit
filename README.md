# React Redux Karma Starter Kit

##Motivation
  - I love React, but I hate setting it up. I seriously wasted my entire Friday night and all day 
 Saturday trying to setup istanbul.
 
## What this provides
- This provides you with a React application that already has webpack, karma, babel, code coverage reports, 
redux, and react-router setup without you having to do anything. For some reason I couldn't find this
anywhere.


##How to use me

`npm install react-redux-karma-starter-kit`

NOTE: If you do `--save-dev` or `--save` it won't save it, and it shouldn't, because this is a one time setup thing.

SECOND NOTE: Keep in mind, this deletes your src and test folders and will overwrite other files: `.eslintrc, .babelrc, karma.conf.js, and webpack.config.js`

This will be solved in a future version so that you can't save it to package.json.
Once installation is complete, do `node_modules/karma/bin/karma start` and that will run your unit tests with coverage generated in a coverage folder.

I'll be adding scripts along with the install process, but if you do `node_modules/webpack-dev-server/bin/webpack-dev-server.js` it will run the app!
