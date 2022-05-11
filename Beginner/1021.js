const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim();
var lines = input.split('\n');

const value = lines.shift();

const bills = [100, 50, 20, 10, 5, 2];
const coines = [1.00, 0.50, 0.25, 0.10, 0.05, 0.01];

let n = parseFloat(value);

console.log('NOTAS:')
bills.forEach(bill => {
    console.log(`${parseInt(n / bill)} nota(s) de R$ ${bill.toFixed(2)}`)
    n %= bill;
});

console.log('MOEDAS:')
coines.forEach(coin => {
    console.log(`${parseInt(n / coin)} moeda(s) de R$ ${coin.toFixed(2)}`)
    n %= coin;
})


