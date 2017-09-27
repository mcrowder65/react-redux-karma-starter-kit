/*eslint no-console:"off"*/
const fs = require("fs");

const data = JSON.parse(fs.readFileSync("node_modules/react-redux-karma-starter-kit/package.json", "utf8"));
const dependencies = Object.keys(data.dependencies).map(dep => dep + "@" + data.dependencies[dep]).join(" ");

console.log(dependencies);
