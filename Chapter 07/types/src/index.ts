function calculateTax(amount: number) {
    return amount * 1.2;
}

let price= 100;
let taxAmount = calculateTax(price);
let halfShare = taxAmount / 2;

console.log(`Full amount in tax: ${taxAmount}`);
console.log(`Half Share: ${halfShare}`);