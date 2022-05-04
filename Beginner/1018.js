const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();
let value = input.split("\n");
console.log(value);

let billNote = parseInt(value / 100);
console.log(`${billNote} nota(s) de R$ ${100},00`);
value = value % 100;

billNote = parseInt(value / 50);
console.log(`${billNote} nota(s) de R$ ${50},00`);
value = value % 50;

billNote = parseInt(value / 20);
console.log(`${billNote} nota(s) de R$ ${20},00`);
value = value % 20;

billNote = parseInt(value / 10);
console.log(`${billNote} nota(s) de R$ ${10},00`);
value = value % 10;

billNote = parseInt(value / 5);
console.log(`${billNote} nota(s) de R$ ${5},00`);
value = value % 5;

billNote = parseInt(value / 2);
console.log(`${billNote} nota(s) de R$ ${2},00`);
value = value % 2;

billNote = parseInt(value / 1);
console.log(`${billNote} nota(s) de R$ ${1},00`);
value = value % 1;

//incorrect
