var context = require.context("./test/client", true, /.spec\.jsx$/); //make sure you have your directory and regex test set correctly!
context.keys().forEach(context);

// requires all components in `project/src/components/**/index.js`
// const components = require.context("./src/client/", true, /.jsx$/);
//
// components.keys().forEach(components);