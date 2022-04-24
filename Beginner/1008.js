const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();

let value = input.split("\n");

let number = parseFloat(value.shift());
let hours = parseFloat(value.shift());
let amountPerHour = parseFloat(value.shift());

let salary = hours * amountPerHour;

console.log(`NUMBER = ${number}`);
console.log('SALARY = U$ ' + salary.toFixed(2));
