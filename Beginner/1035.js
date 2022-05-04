const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const value = input.split("\n");

const a = parseInt(value.shift());
const b = parseInt(value.shift());
const c = parseInt(value.shift());
const d = parseInt(value.shift());

if (b > c && d > a && ((c + d) > (a + b)) && c > 0 && d > 0 && a % 2 === 0 ) {
    greeting = "Valores aceitos";
} else {
    greeting = "Valores nao aceitos";
}