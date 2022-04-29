const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();

let days = parseInt(input);

let years, months;

years = parseInt(days / 365);
days = days % 365;

months = parseInt(days / 30);
days = days % 30;

console.log(`${years} ano(s)`)
console.log(`${months} mes(es)`)
console.log(`${days} dia(s)`);

