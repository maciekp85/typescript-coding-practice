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

let sumPricess = (...numbers) => numbers.reduce((total, value) => 
    total + (Number.isNaN(Number(value)) ? 0 : Number(value)));

let totalPrice = sumPricess(...prices);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);

let combinedArray = [...names, ...prices];
combinedArray.forEach(element => 
    console.log(`Combined Array Element: ${element}`));