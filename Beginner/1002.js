const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();

let r = parseFloat(input);
let n = 3.14159;


console.log(`A=${(n * Math.pow(r, 2)).toFixed(4)}`);
/* When I do this problem on the browser console
the answer is correct but on beecrowd it is not */
