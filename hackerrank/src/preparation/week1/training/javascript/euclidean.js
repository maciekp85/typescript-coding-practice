// Euclidean Algorithm
// Finding greatest common divisor (GCD) - version with division
import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from "node:process";

const rl = readline.createInterface({
    input, output
});

let a;
let b;
let startA;
let startB;

function printGCD1(a, b) {
    console.log("Version 1:")
    startA = a;
    startB = b;

    while(b !=0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    console.log("GCD(" + startA + "," + startB + "): " + a);
}


function printGCD2(a, b) {
    console.log("Version 2:")
    startA = a;
    startB = b;

    while(b !=0) {
        let temp = b;   console.log("temp = " + temp + ", a = " + a + ", b = " + b);
        b = a % b;
        a = temp;
    }
    console.log("GCD(" + startA + "," + startB + "): " + a);
    console.log("\n")
}

printGCD1(10, 0);   // 10
printGCD2(10, 0);   // 10
printGCD1(10, 4);   // 2
printGCD2(10,4);    // 2
printGCD1(217, 84); // 7
printGCD2(217, 84); // 7
printGCD1(42, 78);  // 6
printGCD2(42, 78);  // 6
printGCD1(100, 2);  // 2
printGCD2(100, 2);  // 2

a = await rl.question("Give me number a: ");
b = await rl.question("Give me number b: ");
printGCD1(a, b);
printGCD2(a, b);

rl.close();


