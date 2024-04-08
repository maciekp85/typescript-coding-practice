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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr: number[]): void {
    let elementsNumber: number = arr.length;
    let longArray: number[] = new Array(elementsNumber);
    let sumValue: number = 0;
    let value: number = 0;

    let arrayIndex: number = 0;

    while (arrayIndex < elementsNumber) {
        for (let i: number = 0; i < elementsNumber; i++) {
            value = arr[i];

            if (i == arrayIndex) {
                continue;
            }

            sumValue += value;
        }

        longArray[arrayIndex] = sumValue;
        sumValue = 0;
        arrayIndex++;
    }
    
    longArray.sort();
    console.log(longArray[0] + " " + longArray[elementsNumber-1]);
}


/*
 Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly
 four of the five integers.Then print the respective minimum and maximum values as a single line of two
 space-separated long integers.
 Example
 arr = [1,3,5,7,9]
 The minimum sum is 1+3+5+7=16 and the maximum sum is 3+5+7+9=24. The function prints 16 24

 Sample input: 1 2 3 4 5
 Sample output: 10 14
 */
function main() {

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
