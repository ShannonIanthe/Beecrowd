const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim();

let seconds = parseInt(input);

const hours = parseInt(seconds / 3600);
seconds = seconds % 3600;

const minutes = parseInt(seconds / 60);
seconds = seconds % 60;

console.log(`${hours}:${minutes}:${seconds}`);

