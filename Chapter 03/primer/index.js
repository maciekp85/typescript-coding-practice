let hatPrice = 100;
console.log(`Hat price: ${hatPrice}`);
let bootsPrice = "100";
console.log(`Boots price: ${bootsPrice}`);

let sumPricess = (...numbers) => numbers.reduce((total, value) => 
    total + (Number.isNaN(Number(value)) ? 0 : Number(value)));

let totalPrice = sumPricess(hatPrice, bootsPrice);
console.log(`Total Price: ${totalPrice} ${typeof totalPrice}`);

totalPrice = sumPricess(100, 200, 300);
console.log(`Total price: ${totalPrice} ${typeof totalPrice}`);

totalPrice = sumPricess(100, 200, undefined, false, "hello");
console.log(`Total price: ${totalPrice} ${typeof totalPrice}`);