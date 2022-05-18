const input = require("fs").readFileSync("/dev/stdin", "utf8").trimEnd();
const value = parseInt(input);

const x = value.shift();
const arr = [];

for (i = 0; i < value.length; i++) {
    x += value[i];
    if ( i === null | i < 0 )
    console.log(1)
}


