const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();

let value = input.split(" ");

let a = parseInt(value.shift());
let b = parseInt(value.shift());

let prod = a * b;

console.log("PROD = " + prod);

//correct