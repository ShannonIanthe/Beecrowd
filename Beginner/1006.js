const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();

let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());
let C = parseFloat(lines.shift());


let media = (A * 2 + B * 3 + C * 5) / 11;
console.log(`MEDIA = ${media}`);