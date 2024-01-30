function calculateTax(amount): any {
    return `$${(amount * 1.2).toFixed(2)}`;
}

let price= 100;
let taxAmount = calculateTax(price);
let halfShare = taxAmount / 2;

let personVal = calculateTax("Bob");

console.log(`Price: ${price}`);
console.log(`Full amount in tax: ${taxAmount}`);
console.log(`Half Share: ${halfShare}`);

let newResult: any = calculateTax(200);
let myNumber: number = newResult;
console.log(`Name: ${personVal}`);