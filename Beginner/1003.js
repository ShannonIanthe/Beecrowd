const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();

let value = input.split("\n")

let a = parseInt(value.shift());
let b = parseInt(value.shift());

let soma = a + b;


console.log("SOMA = " + soma);


//correct

