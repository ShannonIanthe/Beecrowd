const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const y = parseInt(lines.shift());
const minutes = (60 * y) / 30;

console.log(`${minutes} minutos`);