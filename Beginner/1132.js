const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim();
const value = input.split("\n");

const x = parseInt(value.shift());
const y = parseInt(value.shift());

for (let i = 0; i < x.length; i++) {
    const xthing = x[i];

    for (let j = 0; j < y.length; j++) {
        const ything = y[i];

        if ( xthing || ything % 13 === 0) {
            --i // if divisible by 13, do not count
        }
    }
}
console.log(xthing);