const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();

let value = input.split(" ");
const a = parseFloat(value.shift());
const b = parseFloat(value.shift());
const c = parseFloat(value.shift());

const pi = 3.14159;


const areaOfTriangle = 1.0/2 * (a * c);
const areaOfCircle = pi * Math.pow(c,2);
const areaOfTrapezium = ((a + b) * c) / 2;
const areaOfSquare = Math.pow(b,2);
const areaOfRectangle = a * b;


console.log(`TRIANGULO: ${areaOfTriangle.toFixed(3)}`);
console.log(`CIRCULO: ${areaOfCircle.toFixed(3)}`); 
console.log(`TRAPEZIO: ${areaOfTrapezium.toFixed(3)}`);
console.log(`QUADRADO: ${areaOfSquare.toFixed(3)}`);
console.log(`RETANGULO: ${areaOfRectangle.toFixed(3)}`);


