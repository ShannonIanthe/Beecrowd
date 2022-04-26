const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();

const value = input.split("\n");

const x = parseFloat(value.shift());
const y = parseFloat(value.shift());

const km = ((x / y) * 1.0).toFixed(3);

console.log(`${km} km/l`);

//correct