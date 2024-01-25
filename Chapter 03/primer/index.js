let hatPrice = 100;
console.log(`Hat price: ${hatPrice}`);
let bootsPrice = "100";
console.log(`Boots price: ${bootsPrice}`);

let names = ["Hat", "Boots", "Gloves"];
let [, , three] = names;
console.log(`Three: ${three}`);

let prices = [100, 120, 50.25];
let [, ...highest] = prices.sort((a, b) => a - b);
highest.forEach(price => console.log(`High price: ${price}`));

console.log(`First Item: ${names[0]}: ${prices[0]}`);

let hat = {
    name: "Hat",
    price: 100
};

let boots = {
    name: "Boots",
    price: "100"
};

let gloves = {
    productName: "Gloves",
    price: "40"
}

gloves.name = gloves.productName;
delete gloves.productName;
gloves.price = 20;

let sumPrices = (...numbers) => numbers.reduce((total, val) =>
    total + (Number.isNaN(Number(val)) ? 0 : Number(val)));

let totalPrice = sumPrices(hat.price, boots.price, gloves.price);
console.log(`Total: ${totalPrice}`);

let propertyCheck = hat.price ?? 0;
let objectAndPropertCheck = hat?.price ?? 0;
console.log(`Checks: ${propertyCheck}, ${objectAndPropertCheck}`);