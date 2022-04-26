const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");

const a = parseFloat(input[0]);
const b = parseFloat(input[1]);

const media = (a * 3.5 + b * 7.5) / 11.0;

global.console.log(`MEDIA = ${media.toFixed(5)}`);
