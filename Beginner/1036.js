const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();

let value = input.split("\n");
const a = parseFloat(value.shift()); 
const b = parseFloat(value.shift()); 
const c = parseFloat(value.shift());


const r1 = (-b + Math.sqrt(b^2 - (4*a*c))) / (2 * a);
const r2 = (-b - Math.sqrt(b^2 - (4*a*c))) / (2 * a);


if (r1 | r2 !== Math.sqrt(0) ) {
    console.log("Impossivel Calcular");
}

console.log(`R1 = ${r1.toFixed(5)}`);
console.log(`R2 = ${r2.toFixed(5)}`);