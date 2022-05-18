const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n");

let even = 0;

// even
for(let i = 0; i < input.length; i++) {
    let number = parseInt(input[i]);
    if (number % 2 === 0) {
        even++;
    }
}

global.console.log(`${even} valor(es) par(es)`);

let odd = 0;

//odd
for (let i = 0; i < input.length; i++) {
    let number = parseInt(input[i]) 
    if (Math.abs(number % 2) > 0) {
        odd++;
    }
}

global.console.log(`${odd} valor(es) impar(es)`);

count = 0;

// positive
for(let i = 0; i < input.length; i++) {
    let number = parseInt(input[i]);
    if (number > 0) {
        count++;
    }
}

global.console.log(`${count} valor(es) positivo(s)`);

count = 0;
  
// negative
for(let i = 0; i < input.length; i++) {
    let number = parseInt(input[i]);
    if (number < 0) {
        count++;
    }
}

global.console.log(`${count} valor(es) negativo(s)`);





