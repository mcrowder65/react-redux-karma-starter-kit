/*eslint no-console:"off"*/
const fs = require("fs");

const data = JSON.parse(fs.readFileSync("node_modules/react-redux-karma-starter-kit/package.json", "utf8"));
const devDependencies = Object.keys(data.devDependencies).join(" ");
console.log(devDependencies);
