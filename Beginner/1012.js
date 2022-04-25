const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();

let value = input.split("\n");

let a = parseFloat(value.shift());
let b = parseFloat(value.shift());
let c = parseFloat(value.shift());

let areaOfTriangle = 1.0/2 * a * c;
let areaOfCircle = 3.14159 * Math.pow(c,2);
let areaOfTrapezium = ((a + b) / 2) * c;
let areaOfSquare = Math.pow(b,2);
let areaOfRectangle = a * b;

console.log(`TRIANGULO: ${areaOfTriangle.toFixed(3)}`);
console.log(`CIRCULO: ${areaOfCircle.toFixed(3)}`); 
console.log(`TRAPEZIO: ${areaOfTrapezium.toFixed(3)}`);
console.log(`QUADRADO: ${areaOfSquare.toFixed(3)}`);
console.log(`RETANGULO: ${areaOfRectangle.toFixed(3)}`);