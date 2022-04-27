const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();

const value = input.split("\n");

const x1 = parseFloat(value.shift());
const y1 = parseFloat(value.shift());
const x2 = parseFloat(value.shift());
const y2 = parseFloat(value.shift());

const x = (x2 - x1);
const y = (y2 - y1);

const p1 = Math.pow(x,2);
const p2 = Math.pow(y,2);

const sqr = (p1 + p2);
const distance = Math.sqrt(sqr).toFixed(4);

console.log(distance);

//wrong