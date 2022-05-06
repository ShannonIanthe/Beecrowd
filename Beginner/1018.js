const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();
let value = parseInt(input);

const billNotes = [100, 50 ,20, 10, 5, 2, 1];

console.log(value);

for (let billNote of billNotes) {
    let totalBills = parseInt(value / billNote);
    console.log(`${totalBills} nota(s) de R$ ${billNote},00`);
    value = value % billNote;
}


