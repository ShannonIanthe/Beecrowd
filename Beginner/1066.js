const arr = [-5, 0, -3, -4, 12];

let positive = 0;
let negative = 0;
let pares = 0;
let impares = 0;
for(let i = 0; i < arr.length; i++) {
    if (positive[i] >= 0) {
        console.log (`${positive++} valor(es) positivo(s)`)
    } else if (negative[i] <= 0) {
        console.log (`${negative++} valor(es) negativo(s)`)
    } else if (pares[i] % 2 === 0) {
        console.log (`${pares++} valor(es) par(es)`)
    } else {
        console.log (`${impares[i]++} valor(es) impar(es)`)
    }
}
