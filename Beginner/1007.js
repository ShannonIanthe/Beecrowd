const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();

let value = input.split("\n");

const A = parseFloat(value.shift());
const B = parseFloat(value.shift());
const C = parseFloat(value.shift());
const D = parseFloat(value.shift());

const diferenca = (A * B - C * D);

console.log(`DIFERENCA = ${diferenca}`);

//correct