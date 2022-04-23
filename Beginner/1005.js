const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();

let value = input.split("\n");

let a = parseFloat(value.shift());
let b = parseFloat(value.shift());

let media = (a * 3.5 + b * 7.5) / 11.0;

console.log("MEDIA = " + media.toFixed(5));

//wrong