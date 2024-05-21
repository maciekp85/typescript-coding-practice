import { stdin as input, stdout as output } from "node:process";
import * as readline from "node:readline/promises";

let a, b;

const rl = readline.createInterface({
    input, output
});

function sum1(a, b) {
    let result;
    result = a + b;
    return result;
}

function sum2(a, b) {
    let result;
    result = a + b;
    if (b < 0) {
        console.log(a + " " + b + " = ", result);
    } else {
        console.log(a + " + " + b + " = ", result);
    }
    console.log(result);
}

console.log("Examples of functions in JS:");
a = await rl.question("Give a number a: ");
b = await rl.question("Give a number b: ");
a = Number(a);
b = Number(b);
console.log("Example 1:");
console.log(sum1(a, b));
console.log("Example 2:");
sum2(a, b);
rl.close();