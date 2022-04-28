const input = require('fs').readFileSync("/dev/stdin", "utf8").trim();

const [gasTime, speed] = input.split("\n");

const totalTimeTraveled = gasTime * speed;
const fuelSpent = totalTimeTraveled / 12;

console.log(fuelSpent.toFixed(3));

// correct