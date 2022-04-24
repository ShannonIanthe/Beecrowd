const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();

let value = input.split("\n");

let a = parseFloat(value.shift());
let b = parseFloat(value.shift());
let c = parseFloat(value.shift());

let media = (a * 2 + b * 3 + c * 5) / 10.0;

console.log("MEDIA = " + media.toFixed(1));

//correct