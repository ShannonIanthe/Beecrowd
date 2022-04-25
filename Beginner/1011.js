const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();

let value = input.split("\n");

let pi = 3.14159;
let r = Math.pow(parseFloat(value.shift()),3);

let volume = 4.0/3 * pi * r;

console.log("VOLUME = " + volume.toFixed(3));