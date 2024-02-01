function calculateTax(amount: number): number {
    return amount * 1.2;
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

let hat: [string, number, number?, ...number[]] = ["Hat", 100, 10, 1.20, 3, 0.95];
let gloves: [string, number, number?, ...number[]] = ["Gloves", 75, 10];

[hat, gloves].forEach(tuple => {
    let [name, price, taxRate, ...coupons] = tuple;
    if (taxRate != undefined) {
        price += price * (taxRate/100);
    }
    coupons.forEach(c => price -= c);
    writePrice(name, price);
})