const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");

let sum = 0;

input.forEach((number) => {
    sum += parseInt(number);
});

console.log("SOMA = " + sum);
