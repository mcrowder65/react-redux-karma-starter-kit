/*eslint no-console:"off"*/
const fs = require("fs");

const data = JSON.parse(fs.readFileSync("../package.json", "utf8"));
const devDependencies = Object.keys(data.devDependencies).join(" ");
console.log(devDependencies);
