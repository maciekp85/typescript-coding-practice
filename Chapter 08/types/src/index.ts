function calculateTax(amount, discount?) {
    return (amount * 1.2) - (discount | 0);
}

let taxValue = calculateTax(100, 0);
console.log(`2 args: ${taxValue}`);

taxValue = calculateTax(100);
console.log(`1 arg: ${taxValue}`);
// taxValue = calculateTax(100, 10, 20);
// console.log(`3 args: ${taxValue}`);
