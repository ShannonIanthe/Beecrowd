const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim();
const value = input.split("\n");

// const floatNumber = parseFloat(value.shift());


if (0 <= value <= 25) {
    console.log(`Intervalo [0, 25]`)
} else if (25 < value < 50) {
    console.log(`Intervalo (25, 50]`)
} else if (50 < value < 75) {
    console.log(`Intervalo (50, 75])`)
} else if (75 < value < 100) {
    console.log(`Intervalo (75, 100]`)
} else (value < 0 || value > 100); {
    console.log("Fora de intervalo")
} 

//refactor code 
