const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();

const value = input.split("\n");

for (let i = 0; i < value.length; i++) {
    value[i] = value[i].split(" ");
}

const x1 = parseFloat(value[0][0]);
const y1 = parseFloat(value[0][1]);
const x2 = parseFloat(value[1][0]);
const y2 = parseFloat(value[1][1]);

const x = (x2 - x1);
const y = (y2 - y1);

const p1 = Math.pow(x,2);
const p2 = Math.pow(y,2);

const sqr = (p1 + p2);
const distance = Math.sqrt(sqr).toFixed(4);

console.log(distance);