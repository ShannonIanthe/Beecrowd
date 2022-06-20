const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim();
const value = input.split("/n");

// If score is 7 or higher (7>=) put Aluno aprovado
//If score is less than 5 (5<) put Aluno reprovado
//IF score is between 5.0 -6.9 (5> score & 6.9 < score)
//else write Nota do exame
// then recalculate score exam score + previous exam score / 2
// the new score is 5> write Aluno aprovado
//if it is 4.9 =< write reprovado