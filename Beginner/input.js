const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");

const numberOne = parseInt(input[1]);
const numberTwo = parseInt(input[2]);

global.console.log(`${numberOne + numberTwo}`);