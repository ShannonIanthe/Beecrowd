const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();

let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());

let media = (A * 3.5 + B * 7.5) / 11;
console.log(`MEDIA = ${media.toFixed(5)}`);

//wrong