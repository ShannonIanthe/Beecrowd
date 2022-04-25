const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");

const a = parseFloat(input[0]);
const b = parseFloat(input[1]);

const media = (a * 3.5 + b * 7.5) / 11.0;

<<<<<<< HEAD
let media = (a * 3.5 + b * 7.5) / 11.0;

console.log("MEDIA = " + media.toFixed(5));

//correct
=======
global.console.log(`MEDIA = ${media.toFixed(5)}`);
>>>>>>> f42ec57636962ef9851457821cf0e176645761fb
