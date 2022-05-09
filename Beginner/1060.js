const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim();
const value = input.split("\n")

var posCount = (value.shift());

value.forEach((item) => {
    if (item > 0) {
        posCount.count();
    }
})

    console.log(`${posCount} valores positivos`);

