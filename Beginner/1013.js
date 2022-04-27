const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();

let value = input.split("\n");

const a = parseInt(value.shift());
const b = parseInt(value.shift());
const c = parseInt(value.shift());

const maior = Math.max(a, b, c);

console.log(`${maior} eh o maior`);