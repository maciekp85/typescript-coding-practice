function calculateTax(amount: number): number {
    return amount * 1.2;
}

let price: number = 100;
let taxAmount: number = calculateTax(price);
let halfShare: number = taxAmount / 2;

console.log(`Full amount in tax: ${taxAmount}`);
console.log(`Half Share: ${halfShare}`);

// console.log(`${12} = ${calculateTax(12)}`);
// console.log(`${"Hello"} = ${calculateTax("Hello")}`);
// console.log(`${true} = ${calculateTax(true)}`);