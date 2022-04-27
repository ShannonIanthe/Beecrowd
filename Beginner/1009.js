const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();

let value = input.split("\n");

let name = parseFloat(value.shift());
let salary = parseFloat(value.shift());
let sales = parseFloat(value.shift());

let joao = salary + (sales * 0.15);

console.log(`TOTAL = R$ ${joao.toFixed(2)}`);


//correct
