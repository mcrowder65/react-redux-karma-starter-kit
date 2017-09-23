var srcReq = require.context("./src/client", true, /^((?!app).)*\.jsx?$/);
srcReq.keys().map(srcReq);

// Use webpack to infer and `require` tests automatically only for test/client
var testsReq = require.context("./test/client", true, /\.spec.jsx?$/);
testsReq.keys().map(testsReq);