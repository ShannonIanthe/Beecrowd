const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim();

const arr = [7, -5, 6, -3.4, 4.6, 12];

const positiveNumbers = arr => {
    return arr.reduce((acc, val, ind) => {
        if(val >= 0 && (arr[ind+1] < 0 || typeof arr[ind+1] === 'undefined')) {
            acc++
        }
        return acc;
    }, 0);
};

console.log(`${positiveNumbers(arr)} valores positivos`)

//still dont understand this one
