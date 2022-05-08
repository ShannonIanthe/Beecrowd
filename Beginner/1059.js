const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim();


for (let i = 1; i < 101; i++) {
    if ( i % 2 === 0) {
        console.log(i)
    }
}