const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();

const A = parseInt(input);
const B = parseInt(input);
const C = parseInt(input);
const D = parseInt(input);

const diferenca = (A * B - C * D)
console.log(`DIFERENCA = ${diferenca}`);

//wrong