const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n");

for (let i = 0; i < input.length; i++) {
    const number = parseInt(input[i]);

    if (number > 0) {
        global.console.log(`X[${i}] = ${number}`)
    } else {
        global.console.log(`X[${i}] = 1`)
    }
}


