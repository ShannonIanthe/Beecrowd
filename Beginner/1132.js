const input = require("fs").readFileSync("/dev/stdin", "utf8").trimEnd();
const value = parseInt(input);

const x = parseInt(value.shift());
const y = parseInt(value.shift());

function sumNotThirteen (x, y) {
    sum = 0;
    for (let i = x; i <= y; i++) {
    
    if (i % 13 !== 0) 
    sum += i;
    }
    return sum;
}