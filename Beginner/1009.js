const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();

let value = input.split("\n");

let salary = parseFloat(value.shift());
let sales = parseFloat(value.shift()) * 0.15;

let joao = salary + sales;

console.log("TOTAL = R$ " + joao.toFixed(2));

//manuel test correct
//beecrowd incorrect