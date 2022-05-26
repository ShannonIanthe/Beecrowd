const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim();

const value = input.split("\n");

for (let i = 0; i < value.length; i++) {
    value[i] = value[i].split(" ");
}

const a = parseInt(value[0][0]);
const b = parseFloat(value[0][1])

const one = 4.00;
const two = 4.50;
const three = 5.00;
const four = 2.00;
const five = 1.50;

const total = a * (b * two);




//output 3 2 = two orders of number 3 
//output 4 3 = three orders of number 4