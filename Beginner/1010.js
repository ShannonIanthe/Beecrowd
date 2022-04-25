const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();

let value = input.split("\n");

let productOne = value.shift().split(" ");
let productTwo = value.shift().split(" ");

let productOneId = productOne.shift();
let productOneQuantity = productOne.shift();
let productOneValue = productOne.shift();
let productOneTotal = productOneQuantity * productOneValue;

let productTwoId = productTwo.shift();
let productTwoQuantity = productTwo.shift();
let productTwoValue = productTwo.shift();
let productTwoTotal = productTwoQuantity * productTwoValue;

let totalValue = productOneTotal + productTwoTotal;

console.log("VALOR A PAGAR: R$ " + totalValue.toFixed(2));