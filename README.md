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

NOTE: do not do --save or --save-dev, because then that will add it to your dependencies and run the install script everytime and overwrite your src and test folders!

This will be solved in a future version so that you can't save it to package.json.
Once installation is complete, do `karma start` and that will run your unit tests with coverage generated in a coverage folder.

I'll be adding scripts along with the install process, but if you do `node_modules/webpack-dev-server/bin/webpack-dev-server.js` it will run the app!
