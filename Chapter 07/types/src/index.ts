function calculateTax(amount: number, format: boolean): string | number {
    const calcAmount = amount * 1.2;
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}

let taxNumber : number = calculateTax(100, false) as number;
let taxString : string = calculateTax(100, true) as string;

console.log(`Number Value: ${taxNumber.toFixed(2)}`);
console.log(`String value: ${taxString.charAt(0)}`);