const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();
let value = input.split("\n");

for (let i = 0; i < value.length; i++) {
    value[i] = value[i].split(" ");
}

const a = parseInt(value[0][0]);
const b = parseInt(value[0][1]);
const c = parseInt(value[0][2]);

const bhaskara = b^2 - (a * c);

console.log(bhaskara);