const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim();

const value = input.split("\n");

for (let i = 0; i < value.length; i++) {
    value[i] = value[i].split(" ");
}

const a = parseInt(value[0][0]);
const b = parseFloat(value[0][1])

for (let j = 0; j < value.length; j++) {
    value[j] = value[i].split(" ")
}

const one = [0][1];
const two = [1][1];
const three = [2][1];
const four = [3][1];
const five = [4][1];

const total = a * (2 * two);




//output 3 2 = two orders of number 3 
//output 4 3 = three orders of number 4