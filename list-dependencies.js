/*eslint no-console:"off"*/
const fs = require("fs");

const data = JSON.parse(fs.readFileSync("package.json", "utf8"));
const dependencies = Object.keys(data.dependencies).join(" ");
console.log(dependencies);
