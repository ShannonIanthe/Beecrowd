const arr = [-5, 0, -3, -4, 12];

for(let i = 0; i < arr.length; i++) {
    if (i >= 0) {
        console.log (`${i++} valor(es) positivo(s)`)
    } else if (i <= 0) {
        console.log (`${i++} valor(es) negativo(s)`)
    } else if (i % 2 === 0) {
        console.log (`${i++} valor(es) par(es)`)
    } else {
        console.log (`${i++} valor(es) impar(es)`)
    }
}
