const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim();
let value = parseInt(input);

const one = parseFloat(value.shift());
const two = parseFloat(value.shift());
const three = parseFloat(value.shift());
const four = parseFloat(value.shift());