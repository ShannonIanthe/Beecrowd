const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const value = input.split("\n");

for (let i= 0; i < value.length; i++) {
    value[i] = value[i].split(" ");
}

const a = parseInt(value[0][0]);
const b = parseInt(value[0][1]);
const c = parseInt(value[0][2]);
const d = parseInt(value[0][3]);

if (b > c && d > a && ((c + d) > (a + b)) && c > 0 && d > 0 && a % 2 === 0 ) {
    greeting = "Valores aceitos";
} else {
    greeting = "Valores nao aceitos";
}

console.log(greeting);