// Euclidean Algorithm
// Finding greatest common divisor (GCD), version with subtraction (not optimal comparing with division or recurrent algorithm)
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({
    input, output
});

console.log("Euclidean version with subtraction");
let a, b, startA, startB;

function printGCD(a, b) {
    console.log("Version 1:");
    startA = a;
    startB = b;

    while(a != b) {
        if (a == 0) {
            a = b;
        } else if (b==0) {
            break;
        } else if (a > b) {
            a = a - b;
        } else {
            b = b - a;
        }
    }

    console.log("GCD(" + startA + ", " + startB + "): " + a);
}

function printGCD2(a, b) {
    console.log("Version 2:")
    let counter = 0;

    while(a != b) {
        if (a == 0) {
            console.log("a=" +  b);
            a = b;
        } else if (b==0) {
            console.log("a=" + a);
            break;
        } else if (a > b) {
            console.log("a=" +  a + "-" + b + "=" + (a - b) + ", b=" + b);
            a = a - b;
            counter++;
        } else {
            console.log("b=" + b +  "-" + a + "=" + (b - a) + ", a=" + a);
            b = b - a;
            counter++;
        }
    }

    console.log("Number of operations: " + counter);
}

printGCD(4, 6);    // 2
printGCD2(4, 6);    // 2
printGCD(4, 0);    // 4
printGCD2(4, 0);    // 4
printGCD(0, 8);    // 8
printGCD2(0, 8);    // 8
printGCD(10,4);    // 2
printGCD2(10,4);    // 2
printGCD(217, 84); // 7
printGCD2(217, 84); // 7
printGCD(42, 78);  // 6
printGCD2(42, 78);  // 6
printGCD(100, 2);  // 2

a = await rl.question("Give me number a: ");
b = await rl.question("Give me number b: ");

printGCD(Number(a), Number(b));
printGCD2(Number(a), Number(b));

rl.close();