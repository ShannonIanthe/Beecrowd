const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim();
let value = input.split("\n");

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

//moedas
let moedas = parseInt(value / 0.100);
console.log(`${moedas} nota(s) de R$ ${1}.00`);
value = value % 100;


moedas = parseInt(value / 0.50);
console.log(`${billNote} nota(s) de R$ .${50}`);
value = value % 50;

moedas = parseInt(value / 0.20);
console.log(`${billNote} nota(s) de R$ .${20}`);
value = value % 20;

moedas = parseInt(value / 0.10);
console.log(`${billNote} nota(s) de R$ .${10}`);
value = value % 10;

moedas = parseInt(value / 0.5);
console.log(`${billNote} nota(s) de R$ 0.0${5}`);
value = value % 5;

moedas = parseInt(value / 0.1);
console.log(`${billNote} nota(s) de R$ 0.0${1}`);
value = value % 0.1;

console.log(billNote, moedas);