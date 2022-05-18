const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();

let value = input.split(" ");

const a = parseInt(value.shift());
const b = parseInt(value.shift());
const c = parseInt(value.shift());

let maiorAB = (a + b + Math.abs(a - b)) / 2;
let maior = (c + maiorAB + Math.abs(c - maiorAB)) / 2;

console.log(`${maior} eh o maior`);


