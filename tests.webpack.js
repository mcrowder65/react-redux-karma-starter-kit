var context = require.context("./test/client", true, /.spec\.jsx$/); //make sure you have your directory and regex test set correctly!
context.keys().forEach(context);