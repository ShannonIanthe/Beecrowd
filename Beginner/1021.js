const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim();
let value = parseInt(input);

const billNotes = [100, 50, 20, 10, 5, 1];
const coines = [1.00, 0.50, 0.25, 0.10, 0.05, 0.01];

console.log("NOTAS:")
for (let billNote of billNotes) {
    let totalBills = parseInt(value / billNote);
    console.log(`${totalBills} nota(s) de R$ ${billNote},00`);
    value = value % billNote;
}

console.log("MOEDAS:")
for (let coin of coines) {
    let totalCoines = parseInt(value / coin);
    console.log(`${totalCoines} moeda(s) de R$ ${coin}`)
}

