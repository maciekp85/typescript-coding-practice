'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr: number[]): void {
    let size: number = arr.length;
    let positive: number = 0, negative: number = 0, zero: number = 0;
    for (let element of arr) {
        if (element < 0) {
            negative++;
        } else if(element > 0) {
            positive++;
        } else {
            zero++;
        }
    }

    let positiveRatio: number = positive/size;
    let negativeRatio: number = negative/size;
    let zeroRatio: number = zero/size;

    console.log(positiveRatio.toFixed(6));
    console.log(negativeRatio.toFixed(6));
    console.log(zeroRatio.toFixed(6));
}

/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
Print the decimal value of each fraction on a new line with  places after the decimal.

Sample input:               Function:
6                           arr[] size n=6
-4 3 -9 0 4 1               arr = [-4, 3, -9, 0, 4, 1]

Sample output:
0.500000
0.333333
0.166667
*/
function main() {
    const n: number = parseInt(readLine().trim(), 10);

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
